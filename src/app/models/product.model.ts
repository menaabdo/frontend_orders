import { Item } from "./item.model";

export interface Product{
    id:number
    size_name:string
    size_price:number
    belongstoitems:Item
    rep:number
    
}