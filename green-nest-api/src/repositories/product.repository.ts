import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Product, ProductRelations, ProductReview, OrderDetails} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductReviewRepository} from './product-review.repository';
import {OrderDetailsRepository} from './order-details.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly productReviews: HasManyRepositoryFactory<ProductReview, typeof Product.prototype.id>;

  public readonly orderDetails: HasManyRepositoryFactory<OrderDetails, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('ProductReviewRepository') protected productReviewRepositoryGetter: Getter<ProductReviewRepository>, @repository.getter('OrderDetailsRepository') protected orderDetailsRepositoryGetter: Getter<OrderDetailsRepository>,
  ) {
    super(Product, dataSource);
    this.orderDetails = this.createHasManyRepositoryFactoryFor('orderDetails', orderDetailsRepositoryGetter,);
    this.registerInclusionResolver('orderDetails', this.orderDetails.inclusionResolver);
    this.productReviews = this.createHasManyRepositoryFactoryFor('productReviews', productReviewRepositoryGetter,);
    this.registerInclusionResolver('productReviews', this.productReviews.inclusionResolver);
  }
}
