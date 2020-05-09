import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Product, ProductRelations, ProductReview, OrderDetails, Category, SubCategory} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductReviewRepository} from './product-review.repository';
import {OrderDetailsRepository} from './order-details.repository';
import {CategoryRepository} from './category.repository';
import {SubCategoryRepository} from './sub-category.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly productReviews: HasManyRepositoryFactory<ProductReview, typeof Product.prototype.id>;

  public readonly orderDetails: HasManyRepositoryFactory<OrderDetails, typeof Product.prototype.id>;

  public readonly category: BelongsToAccessor<Category, typeof Product.prototype.id>;

  public readonly subCategory: BelongsToAccessor<SubCategory, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('ProductReviewRepository') protected productReviewRepositoryGetter: Getter<ProductReviewRepository>, @repository.getter('OrderDetailsRepository') protected orderDetailsRepositoryGetter: Getter<OrderDetailsRepository>, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>, @repository.getter('SubCategoryRepository') protected subCategoryRepositoryGetter: Getter<SubCategoryRepository>,
  ) {
    super(Product, dataSource);
    this.subCategory = this.createBelongsToAccessorFor('subCategory', subCategoryRepositoryGetter,);
    this.registerInclusionResolver('subCategory', this.subCategory.inclusionResolver);
    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter,);
    this.registerInclusionResolver('category', this.category.inclusionResolver);
    this.orderDetails = this.createHasManyRepositoryFactoryFor('orderDetails', orderDetailsRepositoryGetter,);
    this.registerInclusionResolver('orderDetails', this.orderDetails.inclusionResolver);
    this.productReviews = this.createHasManyRepositoryFactoryFor('productReviews', productReviewRepositoryGetter,);
    this.registerInclusionResolver('productReviews', this.productReviews.inclusionResolver);
  }
}
