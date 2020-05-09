import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {SubCategory, SubCategoryRelations, Product, Category} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository} from './product.repository';
import {CategoryRepository} from './category.repository';

export class SubCategoryRepository extends DefaultCrudRepository<
  SubCategory,
  typeof SubCategory.prototype.id,
  SubCategoryRelations
> {

  public readonly products: HasManyRepositoryFactory<Product, typeof SubCategory.prototype.id>;

  public readonly category: BelongsToAccessor<Category, typeof SubCategory.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>,
  ) {
    super(SubCategory, dataSource);
    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter,);
    this.registerInclusionResolver('category', this.category.inclusionResolver);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
  }
}
