import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_productReview_usersId: {
        name: 'fk_productReview_usersId',
        entity: 'Users',
        entityKey: 'id',
        foreignKey: 'usersId',
      },
      fk_productReview_productId: {
        name: 'fk_productReview_productId',
        entity: 'Product',
        entityKey: 'id',
        foreignKey: 'productId',
      },
    },
  },
})
export class ProductReview extends Entity {
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
  comment: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  @property({
    type: 'number',
  })
  usersId?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  constructor(data?: Partial<ProductReview>) {
    super(data);
  }
}

export interface ProductReviewRelations {
  // describe navigational properties here
}

export type ProductReviewWithRelations = ProductReview & ProductReviewRelations;
