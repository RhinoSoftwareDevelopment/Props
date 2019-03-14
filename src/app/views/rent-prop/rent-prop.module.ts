import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogComponent } from './catalog/catalog.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NavigationModule } from '../navigation/navigation.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { RentFormComponent } from './rent-form/rent-form.component';

@NgModule({
  declarations: [CatalogComponent, ProductCardComponent, RentFormComponent],
  imports: [
    CommonModule,
    NavigationModule,
    MaterialDesignModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class RentPropModule { }
