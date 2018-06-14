import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "../products/product/product.model";

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
    productList: Array<Product>;

    createDb(){

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

        return {
            products: this.productList
        }
    }
}