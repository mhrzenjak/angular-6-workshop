import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  id: number;

  product: Product;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.getProduct(value['id']);
    });
  }

  ngOnChanges(){
    //this.getProduct(this.id);
  }

  getProduct(id: number){
    this.product = this.productService.getProduct(id);
  }

}
