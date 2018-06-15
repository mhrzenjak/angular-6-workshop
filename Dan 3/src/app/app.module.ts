import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ProductService } from './products/shared/product.service';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './users/shared/user.service';
import { ProductInsertComponent } from './products/product-insert/product-insert.component';
import { UserInsertComponent } from './users/user-insert/user-insert.component';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';
import { LoginComponent } from './users/login/login.component';
import { AuthentificationService } from './shared/authentification.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    ProductListComponent,
    ProductComponent,
    WelcomeComponent,
    UserComponent,
    UserListComponent,
    ProductInsertComponent,
    UserInsertComponent,
    NavigationLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    RouterModule.forRoot([
      { 
        path: '',
        component: NavigationLayoutComponent,
        children: [
          {
            path: 'productList',
            component: ProductListComponent
          },
          {
            path: 'product/:id',
            component: ProductComponent
          },
          {
            path: 'newProduct',
            component: ProductInsertComponent
          },
          {
            path: 'userList',
            component: UserListComponent
          },
          {
            path: 'user/:id',
            component: UserComponent
          },
          {
            path: 'newUser',
            component: UserInsertComponent
          },
        ]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        component: WelcomeComponent
      }
    ])
  ],
  providers: [
    ProductService,
    UserService,
    AuthentificationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
