import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Products } from '../../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private _apiservice: ApiService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this._apiservice.getproducts()
    .then(products => this.products = products)
    .then(data => console.log(data));
  }
}
