import {Entity, hasMany, model, property} from '@loopback/repository';
import {Category, CategoryWithRelations} from './category.model';

@model()
export class MainCategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Category)
  categories: Category[];

  constructor(data?: Partial<MainCategory>) {
    super(data);
  }
}

export interface MainCategoryRelations {
  // describe navigational properties here
  Categories?: CategoryWithRelations[];
}

export type MainCategoryWithRelations = MainCategory & MainCategoryRelations;
