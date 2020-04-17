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
  PaymentType,
  Order,
} from '../models';
import {PaymentTypeRepository} from '../repositories';

export class PaymentTypeOrderController {
  constructor(
    @repository(PaymentTypeRepository) protected paymentTypeRepository: PaymentTypeRepository,
  ) { }

  @get('/payment-types/{id}/orders', {
    responses: {
      '200': {
        description: 'Array of PaymentType has many Order',
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
    return this.paymentTypeRepository.orders(id).find(filter);
  }

  @post('/payment-types/{id}/orders', {
    responses: {
      '200': {
        description: 'PaymentType model instance',
        content: {'application/json': {schema: getModelSchemaRef(Order)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof PaymentType.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInPaymentType',
            exclude: ['id'],
            optional: ['paymentTypeId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.paymentTypeRepository.orders(id).create(order);
  }

  @patch('/payment-types/{id}/orders', {
    responses: {
      '200': {
        description: 'PaymentType.Order PATCH success count',
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
    return this.paymentTypeRepository.orders(id).patch(order, where);
  }

  @del('/payment-types/{id}/orders', {
    responses: {
      '200': {
        description: 'PaymentType.Order DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.paymentTypeRepository.orders(id).delete(where);
  }
}
