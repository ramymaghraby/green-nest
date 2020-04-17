import {Entity, hasMany, model, property} from '@loopback/repository';
import {Order, OrderWithRelations} from './order.model';

@model()
export class ShippingService extends Entity {
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

  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Order)
  orders: Order[];

  constructor(data?: Partial<ShippingService>) {
    super(data);
  }
}

export interface ShippingServiceRelations {
  // describe navigational properties here
  Orders?: OrderWithRelations;
}

export type ShippingServiceWithRelations = ShippingService &
  ShippingServiceRelations;
