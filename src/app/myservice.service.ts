import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  mycartproduct:Product[]=[]
  flag=0
  sum=0
    constructor(private httpclient: HttpClient) { }
    additem(data:any){
      
      return this.httpclient.post(`${environment.apiURL}add`,data)
    }
    getallitems(){
      return this.httpclient.get(`${environment.apiURL}getitems`)
    }
    getallproducts(){
      return this.httpclient.get(`${environment.apiURL}getproducts`)
    
    }
    deleteitem(id:number){
      return this.httpclient.post(`${environment.apiURL}delete`,{id})
      
    }
    add_to_cart(product:Product){
      // if(this.mycartproduct[this.mycartproduct.indexOf(product)])
          
      this.mycartproduct.push(product)
     
  
    }
    cal_total(price:number){
      this.sum+=price
      console.log(this.sum)
    }
    create_order(data:any){
     return this.httpclient.post(`${environment.apiURL}addorder`,data)

    }
    allorders(){
      return this.httpclient.get(`${environment.apiURL}orders`)

    }
    detailes(id:number){
      return this.httpclient.get(`${environment.apiURL}detailes/${id}`)

    }
  }
  
