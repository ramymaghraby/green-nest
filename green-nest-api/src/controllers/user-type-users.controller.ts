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
  UserType,
  Users,
} from '../models';
import {UserTypeRepository} from '../repositories';

export class UserTypeUsersController {
  constructor(
    @repository(UserTypeRepository) protected userTypeRepository: UserTypeRepository,
  ) { }

  @get('/user-types/{id}/users', {
    responses: {
      '200': {
        description: 'Array of UserType has many Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Users>,
  ): Promise<Users[]> {
    return this.userTypeRepository.users(id).find(filter);
  }

  @post('/user-types/{id}/users', {
    responses: {
      '200': {
        description: 'UserType model instance',
        content: {'application/json': {schema: getModelSchemaRef(Users)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof UserType.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {
            title: 'NewUsersInUserType',
            exclude: ['id'],
            optional: ['userTypeId']
          }),
        },
      },
    }) users: Omit<Users, 'id'>,
  ): Promise<Users> {
    return this.userTypeRepository.users(id).create(users);
  }

  @patch('/user-types/{id}/users', {
    responses: {
      '200': {
        description: 'UserType.Users PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {partial: true}),
        },
      },
    })
    users: Partial<Users>,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where<Users>,
  ): Promise<Count> {
    return this.userTypeRepository.users(id).patch(users, where);
  }

  @del('/user-types/{id}/users', {
    responses: {
      '200': {
        description: 'UserType.Users DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where<Users>,
  ): Promise<Count> {
    return this.userTypeRepository.users(id).delete(where);
  }
}
