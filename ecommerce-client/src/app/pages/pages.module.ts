import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule
  ],
  exports: [IntroComponent]
})
export class PagesModule { }
