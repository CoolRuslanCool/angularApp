import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AlertModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {MyComponent} from './my.component';
import {CarComponent} from './car/car.component';
import {CarsComponent} from './cars/cars.component';
import {AddCarComponent} from './add-car/add-car.component';
import {TextColorDirective} from './directives/text-color.directive';
import {AddTextPipe} from './services/add-text.pipe';
import {CarFilterPipe} from './car-filter.pipe';
import {CarShopComponent} from './car-shop/car-shop.component';
import {AddNewCarComponent} from './add-new-car/add-new-car.component';
import {Logger} from './services/app-logger-util';
import {FormValidateComponent} from './form-validate/form-validate.component';
import {ReactiveFormValidateComponent} from './reactive-form-validate/reactive-form-validate.component';
import {HttpClientModule} from '@angular/common/http';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    TextColorDirective,
    AddTextPipe,
    CarFilterPipe,
    CarShopComponent,
    AddNewCarComponent,
    FormValidateComponent,
    ReactiveFormValidateComponent,
    Page1Component,
    Page2Component,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Logger
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
