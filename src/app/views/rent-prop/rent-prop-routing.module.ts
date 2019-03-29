import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const rentPropRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  { path: 'rent-form/:id', component: RentFormComponent, canActivate: [AuthGuard] },
  { path: 'requests', component: MyRequestsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rentPropRoutes)
  ],
  exports: [RouterModule]
})
export class RentPropRoutingModule { }
