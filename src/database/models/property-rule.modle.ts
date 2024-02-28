import { Column, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { PropertyListingModel } from "./property-listing.model";

@Table({tableName:'property_rules'})
export class PropertyRulesModel extends BaseModel<PropertyRulesModel>{
   @Column
   @ForeignKey(() => PropertyListingModel)
   public property_id : number

   @Column
   public descripton: string
}