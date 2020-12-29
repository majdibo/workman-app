import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditorComponent } from './form/shared/value-component/editor/editor.component';
import {CodemirrorModule} from '@ctrl/ngx-codemirror';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, MenuItemComponent, EditorComponent, DatatableComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CodemirrorModule,
  ],
  exports: [
    MaterialModule,
    LayoutComponent,
    MenuComponent,
    EditorComponent,
    DatatableComponent
  ]
})
export class BaseModule {
}
