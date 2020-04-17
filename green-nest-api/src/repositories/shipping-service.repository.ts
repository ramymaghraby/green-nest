import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ShippingService, ShippingServiceRelations, Order} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderRepository} from './order.repository';

export class ShippingServiceRepository extends DefaultCrudRepository<
  ShippingService,
  typeof ShippingService.prototype.id,
  ShippingServiceRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof ShippingService.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>,
  ) {
    super(ShippingService, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
