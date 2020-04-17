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
  ShippingService,
  Order,
} from '../models';
import {ShippingServiceRepository} from '../repositories';

export class ShippingServiceOrderController {
  constructor(
    @repository(ShippingServiceRepository) protected shippingServiceRepository: ShippingServiceRepository,
  ) { }

  @get('/shipping-services/{id}/orders', {
    responses: {
      '200': {
        description: 'Array of ShippingService has many Order',
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
    return this.shippingServiceRepository.orders(id).find(filter);
  }

  @post('/shipping-services/{id}/orders', {
    responses: {
      '200': {
        description: 'ShippingService model instance',
        content: {'application/json': {schema: getModelSchemaRef(Order)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ShippingService.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInShippingService',
            exclude: ['id'],
            optional: ['shippingServiceId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.shippingServiceRepository.orders(id).create(order);
  }

  @patch('/shipping-services/{id}/orders', {
    responses: {
      '200': {
        description: 'ShippingService.Order PATCH success count',
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
    return this.shippingServiceRepository.orders(id).patch(order, where);
  }

  @del('/shipping-services/{id}/orders', {
    responses: {
      '200': {
        description: 'ShippingService.Order DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.shippingServiceRepository.orders(id).delete(where);
  }
}
