import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {SubCategory, SubCategoryRelations, Product} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository} from './product.repository';

export class SubCategoryRepository extends DefaultCrudRepository<
  SubCategory,
  typeof SubCategory.prototype.id,
  SubCategoryRelations
> {

  public readonly products: HasManyRepositoryFactory<Product, typeof SubCategory.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(SubCategory, dataSource);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
  }
}
