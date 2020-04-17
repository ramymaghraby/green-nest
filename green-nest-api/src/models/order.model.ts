import {Entity, hasMany, model, property} from '@loopback/repository';
import {OrderDetails, OrderDetailsWithRelations} from './order-details.model';

@model({
  settings: {
    foreignKeys: {
      fk_order_shippingServiceId: {
        name: 'fk_order_shippingServiceId',
        entity: 'ShippingService',
        entityKey: 'id',
        foreignKey: 'shippingServiceId',
      },
      fk_order_paymentTypeId: {
        name: 'fk_order_paymentTypeId',
        entity: 'PaymentType',
        entityKey: 'id',
        foreignKey: 'paymentTypeId',
      },
      fk_order_usersId: {
        name: 'fk_order_usersId',
        entity: 'Users',
        entityKey: 'id',
        foreignKey: 'usersId',
      },
      fk_order_orderStatusId: {
        name: 'fk_order_orderStatusId',
        entity: 'OrderStatus',
        entityKey: 'id',
        foreignKey: 'orderStatusId',
      },
    },
  },
})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
  })
  usersId?: number;

  @hasMany(() => OrderDetails)
  orderDetails: OrderDetails[];

  @property({
    type: 'number',
  })
  shippingServiceId?: number;

  @property({
    type: 'number',
  })
  paymentTypeId?: number;

  @property({
    type: 'number',
  })
  orderStatusId?: number;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
  OrderDetails?: OrderDetailsWithRelations;
}

export type OrderWithRelations = Order & OrderRelations;
