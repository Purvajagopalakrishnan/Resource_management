import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MobileListComponent } from './components/Mobile-list/Mobile-list.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { FinalViewComponent } from './components/final-view/final-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaptopListComponent } from './components/laptop-list/laptop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MobileListComponent,
    AvailabilityComponent,
    FinalViewComponent,
    LaptopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
