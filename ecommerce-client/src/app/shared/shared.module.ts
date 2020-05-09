import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class SharedModule {
  static forRoot() {
    return {
      NgModule: SharedModule
    };
  }
}
