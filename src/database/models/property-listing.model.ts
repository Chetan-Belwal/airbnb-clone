import { Column, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { HostModel } from "./host.model";

@Table({tableName:'property_listing'})
export class PropertyListingModel extends BaseModel<PropertyListingModel>{
   @Column
   @ForeignKey(() => HostModel)
   public host_id : number

   @Column
   public title : string

   @Column
   public subtitle : string

   @Column
   public description : string

   @Column
   public zipcode : number

   @Column
   public city : string

   @Column
   public state : string

   @Column
   public country : string

   @Column
   public guest_num : number

   @Column
   public price_per_night : number

   @Column
   public cleaning_fee : number

   @Column
   public service_fee : number

   @Column
   public checkin_time : Date //Please recheck once again

   @Column
   public checkout_time : Date //this tooo

   @Column
   public avg_rating : number

}