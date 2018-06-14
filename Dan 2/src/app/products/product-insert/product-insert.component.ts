import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  product: Product;

  @ViewChild('productForm')
  productForm: NgForm;


  constructor() { }

  ngOnInit() {
    this.product = new Product();
    this.product.name = "Neki produkt";
    this.product.description = "Neki opis";
    this.product.price = 100;
  }

  save(): void {
    if (this.productForm.valid){
      if (this.productForm.controls['name'].value == "Admin"){
        console.log("Ne može!");
      }
      else{
        console.log("Spremljeno!");
      }
    }
  }

}
