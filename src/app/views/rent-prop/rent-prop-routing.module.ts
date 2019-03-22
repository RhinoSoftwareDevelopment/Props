import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';

const rentPropRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'rent-form/:id', component: RentFormComponent },
  { path: 'requests', component: MyRequestsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rentPropRoutes)
  ],
  exports: [RouterModule]
})
export class RentPropRoutingModule { }
