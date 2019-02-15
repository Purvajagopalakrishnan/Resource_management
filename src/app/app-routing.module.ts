import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { FinalViewComponent } from './components/final-view/final-view.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'resourcelist',component: ResourceListComponent},
  {path: 'availability/:id', component: AvailabilityComponent},
  {path: 'completion',component: FinalViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
