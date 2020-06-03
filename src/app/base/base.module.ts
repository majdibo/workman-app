import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, MenuItemComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    LayoutComponent,
    MenuComponent
  ]
})
export class BaseModule {
}
