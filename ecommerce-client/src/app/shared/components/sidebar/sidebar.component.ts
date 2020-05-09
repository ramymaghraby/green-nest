import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesModel } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { SubCategoriesModel } from 'src/app/models/sub-category.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

Categories: CategoriesModel[];
selectClass: string;

  constructor(
    public router: Router,
    private CategoriesSrv: CategoriesService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.CategoriesSrv.getCategories().subscribe((Cat: CategoriesModel[]) => {
      this.Categories = Cat;
      this.Categories.forEach((category: CategoriesModel) => {
        category.isCollapsed = true;
        this.checkSubCategory(category);
      });
    });
  }
  getThisCategory(category: CategoriesModel) {
    if (category.isCollapsed) {
      this.Categories.forEach(cat => cat.isCollapsed = true);
    }
    category.isCollapsed = !category.isCollapsed;
    this.selectClass = 'selected';
    this.changeCategoryClass(category);
    this.checkSubCategory(category);
  }
  changeCategoryClass(cat: CategoriesModel) {
    this.Categories.forEach(category => category.class = '');
    const addClassCat = this.Categories.indexOf(cat);
    this.Categories[addClassCat].class = 'selected';
  }
  checkSubCategory(cat: CategoriesModel) {
    const catIndex = this.Categories.indexOf(cat);
    if (cat.subCategories) {
      this.Categories[catIndex].subCatStatus = true;
    } else {
      this.Categories[catIndex].subCatStatus = false;
    }
  }
  getSubCategories(subCategory: SubCategoriesModel) {
    this.changeSubCategoryClass(subCategory);
  }
  changeSubCategoryClass(cat: SubCategoriesModel) {
    const CatObj = this.Categories.filter((catego: CategoriesModel) => catego.id === cat.categoryId);
    const CatIndex = this.Categories.indexOf(CatObj[0]);
    this.Categories[CatIndex].subCategories.forEach(subCat => subCat.class = '');
    const subCatIndex = this.Categories[CatIndex].subCategories.indexOf(cat);
    this.Categories[CatIndex].subCategories[subCatIndex].class = 'subItemSelected';
  }
}
