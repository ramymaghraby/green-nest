import {Entity, hasMany, model, property} from '@loopback/repository';
import {Order, OrderWithRelations} from './order.model';
import {
  ProductReview,
  ProductReviewWithRelations,
} from './product-review.model';

@model({
  settings: {
    foreignKeys: {
      fk_users_userTypeId: {
        name: 'fk_users_userTypeId',
        entity: 'UserType',
        entityKey: 'id',
        foreignKey: 'userTypeId',
      },
    },
  },
})
export class Users extends Entity {
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
  FirstName: string;

  @property({
    type: 'string',
    required: true,
  })
  LastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
  })
  userTypeId?: number;

  @hasMany(() => Order)
  orders: Order[];

  @hasMany(() => ProductReview)
  productReviews: ProductReview[];

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
  Orders?: OrderWithRelations;
  ProductReviews?: ProductReviewWithRelations;
}

export type UsersWithRelations = Users & UsersRelations;
