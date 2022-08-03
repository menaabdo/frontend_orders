import { User } from "./user.model";

export interface Order{
    id:number,
   order_amount:string
    belongstouser:User
    created_at:string
}