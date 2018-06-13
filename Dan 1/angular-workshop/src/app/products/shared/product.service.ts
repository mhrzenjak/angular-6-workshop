import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Array<Product>;

  constructor() { 
    this.productList = new Array<Product>();

    this.productList.push(
      {
        id: 1,
        description: "Prvi produkt.",
        lastSoldDate: new Date(),
        name: "Prvi",
        price: 10
      },
      {
        id: 2,
        description: "Neki drugi, bolji produkt.",
        lastSoldDate: new Date(),
        name: "Bolji",
        price: 35
      },
      {
        id: 3,
        description: "Trenutno na popustu",
        lastSoldDate: new Date(),
        name: "Treći",
        price: 5.55
      },
    );
  }

  public getProducts(): Array<Product> {
    return this.productList;
  }

  public getProduct(id : number): Product{
    let product = this.productList.find(x => x.id == id);

    return product;
  }
}
