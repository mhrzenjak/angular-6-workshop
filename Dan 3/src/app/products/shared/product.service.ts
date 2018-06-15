import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Array<Product>> {
    return this.http.get('api/products')
      .pipe(map(response => response as Array<Product>));
  }

  public getProduct(id : number): Observable<Product>{
    return this.http.get('api/products/' + id)
      .pipe(map(response => response as Product));
  }
}
