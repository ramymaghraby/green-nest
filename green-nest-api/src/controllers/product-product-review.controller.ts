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
  Product,
  ProductReview,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductProductReviewController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Array of Product has many ProductReview',
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
    return this.productRepository.productReviews(id).find(filter);
  }

  @post('/products/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductReview)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductReview, {
            title: 'NewProductReviewInProduct',
            exclude: ['id'],
            optional: ['productId']
          }),
        },
      },
    }) productReview: Omit<ProductReview, 'id'>,
  ): Promise<ProductReview> {
    return this.productRepository.productReviews(id).create(productReview);
  }

  @patch('/products/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Product.ProductReview PATCH success count',
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
    return this.productRepository.productReviews(id).patch(productReview, where);
  }

  @del('/products/{id}/product-reviews', {
    responses: {
      '200': {
        description: 'Product.ProductReview DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductReview)) where?: Where<ProductReview>,
  ): Promise<Count> {
    return this.productRepository.productReviews(id).delete(where);
  }
}
