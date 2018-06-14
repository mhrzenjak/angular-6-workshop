import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';

import { ProductService } from './products/shared/product.service';
import { WelcomeComponent } from './welcome/welcome.component';

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
