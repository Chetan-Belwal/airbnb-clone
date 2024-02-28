import { Column, Default, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { GuestModel } from "./guest.model";
import { PropertyListingModel } from "./property-listing.model";

@Table({tableName:'booking'})
export class BookingModel extends BaseModel<BookingModel>{
   @Column
   @ForeignKey(() => PropertyListingModel)
   public property_id : number

   @Column
   @ForeignKey(() => GuestModel)
   public guest_id : number

   @Column
   public checkin_date : Date 

   @Column
   public checkout_date : Date 

   @Column
   public booking_date : Date 

   @Column
   public cancel_date : Date 


   @Default(false)
   @Column
   public is_cancelled : boolean

   @Default(false)
   @Column
   public is_approved : boolean

   @Column
   public refund_paid : string

   @Column
   public total_price : number
   
   @Column
   public tax : number

   @Column
   public total_price_with_tax : number

   @Column
   public refund_amount : number

   @Column
   public amount_paid : number


}