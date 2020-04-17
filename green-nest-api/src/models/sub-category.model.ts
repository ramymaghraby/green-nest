import {Entity, hasMany, model, property} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';

@model({
  settings: {
    foreignKeys: {
      fk_subCategory_categoryId: {
        name: 'fk_subCategory_categoryId',
        entity: 'Category',
        entityKey: 'id',
        foreignKey: 'categoryId',
      },
    },
  },
})
export class SubCategory extends Entity {
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
  })
  categoryId?: number;

  @hasMany(() => Product)
  products: Product[];

  constructor(data?: Partial<SubCategory>) {
    super(data);
  }
}

export interface SubCategoryRelations {
  // describe navigational properties here
  Products?: ProductWithRelations;
}

export type SubCategoryWithRelations = SubCategory & SubCategoryRelations;
