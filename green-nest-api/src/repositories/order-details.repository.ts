import {DefaultCrudRepository} from '@loopback/repository';
import {OrderDetails, OrderDetailsRelations} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderDetailsRepository extends DefaultCrudRepository<
  OrderDetails,
  typeof OrderDetails.prototype.id,
  OrderDetailsRelations
> {
  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource,
  ) {
    super(OrderDetails, dataSource);
  }
}
