import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { TextColorDirective } from './directives/text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    TextColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
