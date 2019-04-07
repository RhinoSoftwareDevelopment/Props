import { NgModule } from '@angular/core';

import { SubmissionsComponent } from './submissions/submissions.component';

import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
    { path: 'admin/submissions', component: SubmissionsComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
