import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "../products/product/product.model";
import { User } from "../users/user/user.model";
import { RolesEnum } from "./roles.enum";

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
    productList: Array<Product>;
    userList: Array<User>;

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

          this.userList = new Array<User>();
          this.userList.push(
            {id: 1, name: "Admin", joinDate: new Date(), active: true, role: RolesEnum.Administrator},
            {id: 2, name: "Korisnik", joinDate: new Date(), active: true, role: RolesEnum.Korisnik},
            {id: 3, name: "Protjerani korisnik", joinDate: new Date(), active: false, role: RolesEnum.Korisnik},
          )



        return {
            products: this.productList,
            users: this.userList
        }
    }
}