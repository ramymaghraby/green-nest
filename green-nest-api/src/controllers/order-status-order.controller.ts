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
  OrderStatus,
  Order,
} from '../models';
import {OrderStatusRepository} from '../repositories';

export class OrderStatusOrderController {
  constructor(
    @repository(OrderStatusRepository) protected orderStatusRepository: OrderStatusRepository,
  ) { }

  @get('/order-statuses/{id}/orders', {
    responses: {
      '200': {
        description: 'Array of OrderStatus has many Order',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Order)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Order>,
  ): Promise<Order[]> {
    return this.orderStatusRepository.orders(id).find(filter);
  }

  @post('/order-statuses/{id}/orders', {
    responses: {
      '200': {
        description: 'OrderStatus model instance',
        content: {'application/json': {schema: getModelSchemaRef(Order)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof OrderStatus.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInOrderStatus',
            exclude: ['id'],
            optional: ['orderStatusId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.orderStatusRepository.orders(id).create(order);
  }

  @patch('/order-statuses/{id}/orders', {
    responses: {
      '200': {
        description: 'OrderStatus.Order PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {partial: true}),
        },
      },
    })
    order: Partial<Order>,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderStatusRepository.orders(id).patch(order, where);
  }

  @del('/order-statuses/{id}/orders', {
    responses: {
      '200': {
        description: 'OrderStatus.Order DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderStatusRepository.orders(id).delete(where);
  }
}
