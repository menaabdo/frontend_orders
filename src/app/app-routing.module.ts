import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemsComponent } from './additems/additems.component';
import { DetailesComponent } from './detailes/detailes.component';
import { HomeComponent } from './home/home.component';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    component:MasterlayoutComponent,
    
  },
  { 
    path:'home',
    component:HomeComponent
  },
  {path:'orders',
  component:OrdersComponent
  },
  {path:'products',component:ProductsComponent},
  {path:'additem',component:AdditemsComponent},
  {path:'detailes/:id',component:DetailesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
