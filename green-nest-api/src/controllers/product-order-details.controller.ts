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
  OrderDetails,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductOrderDetailsController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/order-details', {
    responses: {
      '200': {
        description: 'Array of Product has many OrderDetails',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderDetails)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<OrderDetails>,
  ): Promise<OrderDetails[]> {
    return this.productRepository.orderDetails(id).find(filter);
  }

  @post('/products/{id}/order-details', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrderDetails)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderDetails, {
            title: 'NewOrderDetailsInProduct',
            exclude: ['id'],
            optional: ['productId']
          }),
        },
      },
    }) orderDetails: Omit<OrderDetails, 'id'>,
  ): Promise<OrderDetails> {
    return this.productRepository.orderDetails(id).create(orderDetails);
  }

  @patch('/products/{id}/order-details', {
    responses: {
      '200': {
        description: 'Product.OrderDetails PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderDetails, {partial: true}),
        },
      },
    })
    orderDetails: Partial<OrderDetails>,
    @param.query.object('where', getWhereSchemaFor(OrderDetails)) where?: Where<OrderDetails>,
  ): Promise<Count> {
    return this.productRepository.orderDetails(id).patch(orderDetails, where);
  }

  @del('/products/{id}/order-details', {
    responses: {
      '200': {
        description: 'Product.OrderDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(OrderDetails)) where?: Where<OrderDetails>,
  ): Promise<Count> {
    return this.productRepository.orderDetails(id).delete(where);
  }
}
