import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icon = faXmark;
  response!:any
  items!:any[]
  constructor(private myserve:MyserviceService) { }

  ngOnInit(): void {
    this.getallitems()
  }
  getallitems(){
    this.myserve.getallitems().subscribe((res)=> { this.response=res;this.items=this.response;console.log(res)})
  }
  del(id:number){
    this.myserve.deleteitem(id).subscribe((res)=>{window.location.reload()})
  }

}

