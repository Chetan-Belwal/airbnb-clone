import { Column, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { PropertyListingModel } from "./property-listing.model";

@Table({tableName:'services_offered'})
export class ServicesOfferedModel extends BaseModel<ServicesOfferedModel>{
   @Column
   @ForeignKey(() => PropertyListingModel)
   public property_id : number

   @Column
   public descripton: string

}