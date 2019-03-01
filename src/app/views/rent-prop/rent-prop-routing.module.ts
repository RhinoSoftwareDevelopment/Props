import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CatalogComponent } from './catalog/catalog.component'

const rentPropRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rentPropRoutes)
  ],
  exports: [RouterModule]
})
export class RentPropRoutingModule { }
