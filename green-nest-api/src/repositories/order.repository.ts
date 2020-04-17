import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Order, OrderRelations, OrderDetails} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderDetailsRepository} from './order-details.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly orderDetails: HasManyRepositoryFactory<OrderDetails, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('OrderDetailsRepository') protected orderDetailsRepositoryGetter: Getter<OrderDetailsRepository>,
  ) {
    super(Order, dataSource);
    this.orderDetails = this.createHasManyRepositoryFactoryFor('orderDetails', orderDetailsRepositoryGetter,);
    this.registerInclusionResolver('orderDetails', this.orderDetails.inclusionResolver);
  }
}
