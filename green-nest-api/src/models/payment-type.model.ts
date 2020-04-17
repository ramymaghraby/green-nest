import {Entity, hasMany, model, property} from '@loopback/repository';
import {Order, OrderWithRelations} from './order.model';

@model()
export class PaymentType extends Entity {
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
  type: string;

  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Order)
  orders: Order[];

  constructor(data?: Partial<PaymentType>) {
    super(data);
  }
}

export interface PaymentTypeRelations {
  // describe navigational properties here
  Orders?: OrderWithRelations;
}

export type PaymentTypeWithRelations = PaymentType & PaymentTypeRelations;
