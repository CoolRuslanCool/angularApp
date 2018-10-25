import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Page1Component} from '../page1/page1.component';
import {Page2Component} from '../page2/page2.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {PageParamComponent} from '../page-param/page-param.component';
import {InnerComponent} from '../inner/inner.component';

const routes: Routes = [
  {
    path: 'page1', component: Page1Component,
    children: [{path: ':param1/:param2', component: InnerComponent}]
  },
  {path: 'page2', component: Page2Component},
  {path: 'pageParams/:id/:item', component: PageParamComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
