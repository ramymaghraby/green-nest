import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  MainCategory,
  Category,
} from '../models';
import {MainCategoryRepository} from '../repositories';

export class MainCategoryCategoryController {
  constructor(
    @repository(MainCategoryRepository) protected mainCategoryRepository: MainCategoryRepository,
  ) { }

  @get('/main-categories/{id}/categories', {
    responses: {
      '200': {
        description: 'Array of MainCategory has many Category',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Category>,
  ): Promise<Category[]> {
    return this.mainCategoryRepository.categories(id).find(filter);
  }

  @post('/main-categories/{id}/categories', {
    responses: {
      '200': {
        description: 'MainCategory model instance',
        content: {'application/json': {schema: getModelSchemaRef(Category)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof MainCategory.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {
            title: 'NewCategoryInMainCategory',
            exclude: ['id'],
            optional: ['mainCategoryId']
          }),
        },
      },
    }) category: Omit<Category, 'id'>,
  ): Promise<Category> {
    return this.mainCategoryRepository.categories(id).create(category);
  }

  @patch('/main-categories/{id}/categories', {
    responses: {
      '200': {
        description: 'MainCategory.Category PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {partial: true}),
        },
      },
    })
    category: Partial<Category>,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.mainCategoryRepository.categories(id).patch(category, where);
  }

  @del('/main-categories/{id}/categories', {
    responses: {
      '200': {
        description: 'MainCategory.Category DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.mainCategoryRepository.categories(id).delete(where);
  }
}
