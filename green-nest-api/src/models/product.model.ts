import {Entity, hasMany, model, property, belongsTo} from '@loopback/repository';
import {OrderDetails, OrderDetailsWithRelations} from './order-details.model';
import {
  ProductReview,
  ProductReviewWithRelations,
} from './product-review.model';
import {Category} from './category.model';
import {SubCategory} from './sub-category.model';

@model({
  settings: {
    foreignKeys: {
      fk_product_categoryId: {
        name: 'fk_product_categoryId',
        entity: 'Category',
        entityKey: 'id',
        foreignKey: 'categoryId',
      },
      fk_product_subCategoryId: {
        name: 'fk_product_subCategoryId',
        entity: 'SubCategory',
        entityKey: 'id',
        foreignKey: 'subCategoryId',
      },
    },
  },
})
export class Product extends Entity {
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

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'buffer',
  })
  imgUrl?: Buffer;
  @hasMany(() => ProductReview)
  productReviews: ProductReview[];

  @hasMany(() => OrderDetails)
  orderDetails: OrderDetails[];

  @belongsTo(() => Category)
  categoryId: number;

  @belongsTo(() => SubCategory)
  subCategoryId: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
  ProductReviews?: ProductReviewWithRelations;
  OrderDetails?: OrderDetailsWithRelations;
}

export type ProductWithRelations = Product & ProductRelations;
