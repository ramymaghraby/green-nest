import {Entity, hasMany, model, property} from '@loopback/repository';
import {Product, ProductWithRelations} from './product.model';
import {SubCategory, SubCategoryWithRelations} from './sub-category.model';

@model({
  settings: {
    foreignKeys: {
      fk_category_mainCategoryId: {
        name: 'fk_category_mainCategoryId',
        entity: 'MainCategory',
        entityKey: 'id',
        foreignKey: 'mainCategoryId',
      },
    },
  },
})
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    mysql: {
      columnName: 'id',
      dataType: 'INT',
      dataLength: 2,
      nullable: 'N',
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'name',
      dataType: 'VARCHAR',
      dataLength: 70,
      nullable: 'N',
    },
  })
  name: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'description',
      dataType: 'VARCHAR',
      dataLength: 250,
      nullable: 'N',
    },
  })
  description?: string;

  @property({
    type: 'number',
    mysql: {
      columnName: 'mainCategoryId',
      dataType: 'INT',
      dataLength: 10,
      nullable: 'N',
    },
  })
  mainCategoryId?: number;

  @hasMany(() => SubCategory)
  subCategories: SubCategory[];

  @hasMany(() => Product)
  products: Product[];

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
  SubCategory?: SubCategoryWithRelations;
  Products?: ProductWithRelations;
}

export type CategoryWithRelations = Category & CategoryRelations;
