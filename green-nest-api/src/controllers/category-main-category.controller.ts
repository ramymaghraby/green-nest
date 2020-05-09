import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Category,
  MainCategory,
} from '../models';
import {CategoryRepository} from '../repositories';

export class CategoryMainCategoryController {
  constructor(
    @repository(CategoryRepository)
    public categoryRepository: CategoryRepository,
  ) { }

  @get('/categories/{id}/main-category', {
    responses: {
      '200': {
        description: 'MainCategory belonging to Category',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MainCategory)},
          },
        },
      },
    },
  })
  async getMainCategory(
    @param.path.number('id') id: typeof Category.prototype.id,
  ): Promise<MainCategory> {
    return this.categoryRepository.mainCategory(id);
  }
}
