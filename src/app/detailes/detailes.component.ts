import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent implements OnInit {

  constructor(private myserve:MyserviceService,private activeroute:ActivatedRoute) { }
  id=this.activeroute.snapshot.params['id']
  response!:any
  detailes!:Product[]
  ngOnInit(): void {
    this.myserve.detailes(this.id).subscribe((res)=>{this.response=res;this.detailes=this.response;console.log(res)})
  }

}
