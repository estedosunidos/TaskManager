import { AboutComponent } from './admin/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path: "app-dashboard",component:DashboardComponent},
  {path: "app-about",component:AboutComponent},
  {path:"", redirectTo: "app-dashboard" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
