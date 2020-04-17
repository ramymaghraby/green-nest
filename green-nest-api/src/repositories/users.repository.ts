import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Users, UsersRelations, Order, ProductReview} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderRepository} from './order.repository';
import {ProductReviewRepository} from './product-review.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof Users.prototype.id>;

  public readonly productReviews: HasManyRepositoryFactory<ProductReview, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>, @repository.getter('ProductReviewRepository') protected productReviewRepositoryGetter: Getter<ProductReviewRepository>,
  ) {
    super(Users, dataSource);
    this.productReviews = this.createHasManyRepositoryFactoryFor('productReviews', productReviewRepositoryGetter,);
    this.registerInclusionResolver('productReviews', this.productReviews.inclusionResolver);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
