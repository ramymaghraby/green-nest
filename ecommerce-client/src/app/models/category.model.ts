import { SubCategoriesModel } from './sub-category.model';

export class CategoriesModel {
  constructor() {}
  id: number;
  name: string;
  desciption: string;
  mainCategoryId: number;
  subCategories: SubCategoriesModel[];
  class: string;
  subCatStatus: boolean;
}
