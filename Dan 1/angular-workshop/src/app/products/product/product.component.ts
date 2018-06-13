import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  id: number;

  product: Product;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();
    this.getProduct(this.id);
  }

  getProduct(id: number){
    this.product = this.productService.getProduct(id);
  }

}
