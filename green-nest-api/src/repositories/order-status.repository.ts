import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {OrderStatus, OrderStatusRelations, Order} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderRepository} from './order.repository';

export class OrderStatusRepository extends DefaultCrudRepository<
  OrderStatus,
  typeof OrderStatus.prototype.id,
  OrderStatusRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof OrderStatus.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>,
  ) {
    super(OrderStatus, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
