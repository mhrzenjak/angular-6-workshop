import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  })
export class ProductListComponent implements OnInit {

  productList: Array<Product>;
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = new Array<Product>();
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(value => {
      this.productList = value;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

}
