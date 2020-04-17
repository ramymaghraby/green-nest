import {DefaultCrudRepository} from '@loopback/repository';
import {ProductReview, ProductReviewRelations} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductReviewRepository extends DefaultCrudRepository<
  ProductReview,
  typeof ProductReview.prototype.id,
  ProductReviewRelations
> {
  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource,
  ) {
    super(ProductReview, dataSource);
  }
}
