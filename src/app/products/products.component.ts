import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  response!:any
products!:Product[]
  constructor(private myserve:MyserviceService) { }

  ngOnInit(): void {
    this.allproducts()
  }
allproducts(){

  this.myserve.getallproducts().pipe(
    catchError(() => {
      return throwError(() => new Error('ups sommething happend'));
    })
  )
   
  .subscribe((res)=>{this.products=res.allproducts;console.log(this.products)},(err)=>{console.log(err)})
}
addproduct(product:Product){
  this.myserve.add_to_cart(product)
  this.myserve.cal_total(product.size_price)
 
  
 
}
}

