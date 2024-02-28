import { Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { PropertyListingModel } from "./property-listing.model";
import { GuestModel } from "./guest.model";

const rating = ['1','1.5','2','2.5','3','3.5','4','4.5','5'];

@Table({tableName:'property_reviews'})
export class PropertyReviewModel extends BaseModel<PropertyReviewModel>{
   @Column
   @ForeignKey(() => PropertyListingModel)
   public property_id : number

   @Column
   @ForeignKey(() => GuestModel)
   public guest_id : number

   @Column
   public comment: string

   @Column(DataType.ENUM({values:rating}))
   public cleanliness: string

   @Column(DataType.ENUM({values:rating}))
   public communication: string

   @Column(DataType.ENUM({values:rating}))
   public location: string

   @Column(DataType.ENUM({values:rating}))
   public check_in: string

   @Column(DataType.ENUM({values:rating}))
   public value_for_money: string

   @Column(DataType.ENUM({values:rating}))
   public accuracy: string
}