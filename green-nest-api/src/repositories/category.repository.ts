import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Category, CategoryRelations, SubCategory, Product, MainCategory} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SubCategoryRepository} from './sub-category.repository';
import {ProductRepository} from './product.repository';
import {MainCategoryRepository} from './main-category.repository';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {

  public readonly subCategories: HasManyRepositoryFactory<SubCategory, typeof Category.prototype.id>;

  public readonly products: HasManyRepositoryFactory<Product, typeof Category.prototype.id>;

  public readonly mainCategory: BelongsToAccessor<MainCategory, typeof Category.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('SubCategoryRepository') protected subCategoryRepositoryGetter: Getter<SubCategoryRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('MainCategoryRepository') protected mainCategoryRepositoryGetter: Getter<MainCategoryRepository>,
  ) {
    super(Category, dataSource);
    this.mainCategory = this.createBelongsToAccessorFor('mainCategory', mainCategoryRepositoryGetter,);
    this.registerInclusionResolver('mainCategory', this.mainCategory.inclusionResolver);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
    this.subCategories = this.createHasManyRepositoryFactoryFor('subCategories', subCategoryRepositoryGetter,);
    this.registerInclusionResolver('subCategories', this.subCategories.inclusionResolver);
  }
}
