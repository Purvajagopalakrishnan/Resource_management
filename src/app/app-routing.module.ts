import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { FinalViewComponent } from './components/final-view/final-view.component';
import { LaptopListComponent } from './components/laptop-list/laptop-list.component';
import { MobileListComponent } from './components/Mobile-list/Mobile-list.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'mobilelist',component: MobileListComponent},
  {path: 'laptoplist',component: LaptopListComponent},
  {path: 'availability/:id', component: AvailabilityComponent},
  {path: 'completion',component: FinalViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
