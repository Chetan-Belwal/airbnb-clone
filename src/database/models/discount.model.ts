import { Column, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { PropertyListingModel } from "./property-listing.model";

@Table({tableName:'discount'})
export class DiscountModel extends BaseModel<DiscountModel>{
   @Column
   @ForeignKey(() => PropertyListingModel)
   public property_id : number

   @Column
   public each_day: number

   @Column
   public weekly : number

}