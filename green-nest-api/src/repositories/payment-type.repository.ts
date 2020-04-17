import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PaymentType, PaymentTypeRelations, Order} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OrderRepository} from './order.repository';

export class PaymentTypeRepository extends DefaultCrudRepository<
  PaymentType,
  typeof PaymentType.prototype.id,
  PaymentTypeRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof PaymentType.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>,
  ) {
    super(PaymentType, dataSource);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
