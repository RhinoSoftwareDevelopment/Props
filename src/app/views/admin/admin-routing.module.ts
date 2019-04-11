import { NgModule } from '@angular/core';

import { SubmissionsComponent } from './submissions/submissions.component';

import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/auth/admin.guard';

const adminRoutes: Routes = [
    { path: 'admin/submissions', component: SubmissionsComponent, canActivate: [AdminGuard] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
