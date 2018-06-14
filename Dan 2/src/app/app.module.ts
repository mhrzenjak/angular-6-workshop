import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ProductService } from './products/shared/product.service';
import { InMemoryDataService } from './shared/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    ProductListComponent,
    ProductComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    RouterModule.forRoot([
      {
        path: 'productList',
        component: ProductListComponent
      },
      {
        path: 'product/:id',
        component: ProductComponent
      },
      {
        path: '**',
        component: WelcomeComponent
      }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
