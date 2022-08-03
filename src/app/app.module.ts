import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemsComponent } from './items/items.component';
import { ProductsComponent } from './products/products.component';
import { AdditemsComponent } from './additems/additems.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailesComponent } from './detailes/detailes.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterlayoutComponent,
    HomeComponent,
    OrdersComponent,
    ItemsComponent,
    ProductsComponent,
    AdditemsComponent,
    DetailesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
