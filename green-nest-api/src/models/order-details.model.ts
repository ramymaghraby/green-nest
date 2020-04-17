import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_orderDetails_orderId: {
        name: 'fk_orderDetails_orderId',
        entity: 'Order',
        entityKey: 'id',
        foreignKey: 'orderId',
      },
      fk_orderDetails_productId: {
        name: 'fk_orderDetails_productId',
        entit: 'Product',
        entityKey: 'id',
        foreignKey: 'productId',
      },
    },
  },
})
export class OrderDetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
  })
  orderId?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  constructor(data?: Partial<OrderDetails>) {
    super(data);
  }
}

export interface OrderDetailsRelations {
  // describe navigational properties here
}

export type OrderDetailsWithRelations = OrderDetails & OrderDetailsRelations;
