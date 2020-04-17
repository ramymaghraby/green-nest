import {Entity, hasMany, model, property} from '@loopback/repository';
import {Order, OrderWithRelations} from './order.model';

@model()
export class OrderStatus extends Entity {
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

  @hasMany(() => Order)
  orders: Order[];

  constructor(data?: Partial<OrderStatus>) {
    super(data);
  }
}

export interface OrderStatusRelations {
  // describe navigational properties here
  Orders?: OrderWithRelations;
}

export type OrderStatusWithRelations = OrderStatus & OrderStatusRelations;
