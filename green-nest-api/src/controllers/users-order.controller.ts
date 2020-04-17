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
  Order,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersOrderController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'Array of Users has many Order',
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
    return this.usersRepository.orders(id).find(filter);
  }

  @post('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Order)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrderInUsers',
            exclude: ['id'],
            optional: ['usersId']
          }),
        },
      },
    }) order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.usersRepository.orders(id).create(order);
  }

  @patch('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'Users.Order PATCH success count',
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
    return this.usersRepository.orders(id).patch(order, where);
  }

  @del('/users/{id}/orders', {
    responses: {
      '200': {
        description: 'Users.Order DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.usersRepository.orders(id).delete(where);
  }
}
