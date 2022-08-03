import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
response!:any
orders!:any[]
  constructor(private myserve:MyserviceService) { }

  ngOnInit(): void {
    this.getallorders()
  }
  getallorders(){
     this.myserve.allorders().subscribe((res)=>{this.response=res;this.orders=this.response;console.log(res)
    })  
  }

}
