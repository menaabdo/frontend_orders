import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

name!:string
price!:string
img!:any
selectedfile!:any
fd=new FormData();
length=1
sizearr:number[]=[1]
sizevaluearr:string[]=[]
pricevaluearr:string[]=[]
onecopy:string[]=[]
  constructor(private addserve:MyserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  getimg(event:any){
    this.selectedfile= <File> event.target.files[0]
   this.fd=new FormData();
        this.fd.append('img',this.selectedfile)
   
  
   }
  ///////////////////////////////////////////////////
  add(){
    console.log(this.sizearr.length)
    this.fd.append('name',this.name)
    this.fd.append('price',this.price)
    if(this.sizevaluearr)
    this.fd.append('sizes',JSON.stringify(this.sizevaluearr))
     if(this.pricevaluearr)
     this.fd.append('prices',JSON.stringify(this.pricevaluearr))
    this.addserve.additem(this.fd).subscribe((res)=>{console.log(res)
      this.route.navigateByUrl('home')
    })
  }
  ////////////////////////////////////////
  plus(){
    
this.sizearr?.push(this.length)
this.sizevaluearr.push('')

this.pricevaluearr.push('')
console.log(this.sizevaluearr)

  }
  //////////////////////removeitems from view////////////////
  remove(id:any){
     // this.sizearr.splice(0,id)
document.getElementById(id as string)?.remove()
this.sizevaluearr[id]=''
this.pricevaluearr[id]=''
this.onecopy.splice(0,id)

   
console.log(this.onecopy)
 
 
console.log(this.sizevaluearr)
  }
  getval(e:any,i:number){
    
    this.sizevaluearr[i]=e.target.value
    this.onecopy[i]=e.target.value
  }
  getsize(e:any,i:number){

this.pricevaluearr[i]=e.target.value
console.log(this.pricevaluearr)
  }



}

