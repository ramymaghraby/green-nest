import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [IntroComponent]
})
export class PagesModule { }
