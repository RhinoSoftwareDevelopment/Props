import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';


import { ProductCardComponent } from './product-card/product-card.component';
import { NavigationModule } from '../navigation/navigation.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [CatalogComponent, ProductCardComponent],
  imports: [
    CommonModule,
    NavigationModule,
    MaterialDesignModule,
    FlexLayoutModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class RentPropModule { }
