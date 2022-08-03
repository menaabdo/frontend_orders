import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  response!:any
products!:any[]
  constructor(private myserve:MyserviceService) { }

  ngOnInit(): void {
    this.allproducts()
  }
allproducts(){
  this.myserve.getallproducts().subscribe((res)=>{this.response=res;this.products=this.response;console.log(res);})
}
addproduct(product:Product){
  this.myserve.add_to_cart(product)
  this.myserve.cal_total(product.size_price)
  this.myserve.flag++
  
 
}
}

