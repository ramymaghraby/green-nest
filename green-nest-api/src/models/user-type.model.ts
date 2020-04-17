import {Entity, hasMany, model, property} from '@loopback/repository';
import {Users, UsersWithRelations} from './users.model';

@model()
export class UserType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Users)
  users: Users[];

  constructor(data?: Partial<UserType>) {
    super(data);
  }
}

export interface UserTypeRelations {
  // describe navigational properties here
  Users?: UsersWithRelations;
}

export type UserTypeWithRelations = UserType & UserTypeRelations;
