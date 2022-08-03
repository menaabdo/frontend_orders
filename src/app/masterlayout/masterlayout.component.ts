import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { MyserviceService } from '../myservice.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-masterlayout',
  templateUrl: './masterlayout.component.html',
  styleUrls: ['./masterlayout.component.css']
})
export class MasterlayoutComponent implements OnInit {
  icon = faXmark;
  sum!:number
  flag!:number
  products!:Product[]
  customer_name!:string
  customer_phone!:string
  constructor(private myserve:MyserviceService,private route:Router) { }

  ngOnInit(): void {
    
     this.cart_products()
    
   this.flag=this.myserve.counter
    this.mycalcaluation()
     this.route.navigateByUrl('home')

  }
   myFunction() {
    document.getElementById("myDropdown")!.classList.toggle("show");
  }
  cart_products(){
   this.products= this.myserve.mycartproduct
   console.log(this.products)
   
    
  }
  total(){
   
   console.log(this.myserve.sum)
  }
 
  del(price:number,index:number,rep:number){
this.myserve.mycartproduct.splice(index,1)
this.myserve.sum-=price*rep 
this.myserve.counter=this.myserve.counter-rep
this.flag=this.myserve.counter

  }
  mycalcaluation(){
      setInterval(()=>{this.sum=this.myserve.sum;this.flag=this.myserve.counter
    },200)
  }
  placeorder(products:Product[]){
    
   let arrofids=[];
   for(let p of products){
     arrofids.push(p.id)
   }
   let data={
     customer_name:this.customer_name,
     customer_phone:this.customer_phone,
     amount:this.sum,
     ids:arrofids

     
   }
   this.myserve.create_order(data).subscribe((res)=>{this.products=[];this.customer_name='';this.customer_phone='';this.myserve.sum=0;document.getElementById("myDropdown")!.classList.remove("show");
   ;this.route.navigateByUrl('orders')})
   

  }

}
