import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MainCategory, MainCategoryRelations, Category} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CategoryRepository} from './category.repository';

export class MainCategoryRepository extends DefaultCrudRepository<
  MainCategory,
  typeof MainCategory.prototype.id,
  MainCategoryRelations
> {

  public readonly categories: HasManyRepositoryFactory<Category, typeof MainCategory.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>,
  ) {
    super(MainCategory, dataSource);
    this.categories = this.createHasManyRepositoryFactoryFor('categories', categoryRepositoryGetter,);
    this.registerInclusionResolver('categories', this.categories.inclusionResolver);
  }
}
