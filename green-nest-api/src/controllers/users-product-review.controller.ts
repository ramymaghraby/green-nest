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
  Users,
  ProductReview,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersProductReviewController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Array of Users has many ProductReview',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProductReview)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProductReview>,
  ): Promise<ProductReview[]> {
    return this.usersRepository.productReviews(id).find(filter);
  }

  @post('/users/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductReview)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductReview, {
            title: 'NewProductReviewInUsers',
            exclude: ['id'],
            optional: ['usersId']
          }),
        },
      },
    }) productReview: Omit<ProductReview, 'id'>,
  ): Promise<ProductReview> {
    return this.usersRepository.productReviews(id).create(productReview);
  }

  @patch('/users/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Users.ProductReview PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductReview, {partial: true}),
        },
      },
    })
    productReview: Partial<ProductReview>,
    @param.query.object('where', getWhereSchemaFor(ProductReview)) where?: Where<ProductReview>,
  ): Promise<Count> {
    return this.usersRepository.productReviews(id).patch(productReview, where);
  }

  @del('/users/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Users.ProductReview DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductReview)) where?: Where<ProductReview>,
  ): Promise<Count> {
    return this.usersRepository.productReviews(id).delete(where);
  }
}
