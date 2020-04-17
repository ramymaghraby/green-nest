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
  Order,
  OrderDetails,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderOrderDetailsController {
  constructor(
    @repository(OrderRepository) protected orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/order-details', {
    responses: {
      '200': {
        description: 'Array of Order has many OrderDetails',
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
    return this.orderRepository.orderDetails(id).find(filter);
  }

  @post('/orders/{id}/order-details', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrderDetails)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Order.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderDetails, {
            title: 'NewOrderDetailsInOrder',
            exclude: ['id'],
            optional: ['orderId']
          }),
        },
      },
    }) orderDetails: Omit<OrderDetails, 'id'>,
  ): Promise<OrderDetails> {
    return this.orderRepository.orderDetails(id).create(orderDetails);
  }

  @patch('/orders/{id}/order-details', {
    responses: {
      '200': {
        description: 'Order.OrderDetails PATCH success count',
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
    return this.orderRepository.orderDetails(id).patch(orderDetails, where);
  }

  @del('/orders/{id}/order-details', {
    responses: {
      '200': {
        description: 'Order.OrderDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(OrderDetails)) where?: Where<OrderDetails>,
  ): Promise<Count> {
    return this.orderRepository.orderDetails(id).delete(where);
  }
}
