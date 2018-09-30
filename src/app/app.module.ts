import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { TextColorDirective } from './directives/text-color.directive';
import { AddTextPipe } from './services/add-text.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import { CarShopComponent } from './car-shop/car-shop.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';

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
    AddNewCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
