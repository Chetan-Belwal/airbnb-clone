import { Column, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { UserModel } from "./users.model";

@Table({tableName:'guests'})
export class GuestModel extends BaseModel<GuestModel>{
   @Column
   @ForeignKey(() => UserModel)
   public user_id : number

   @Column
   public credit_card_number: number

   @Column
   public number_of_rating : number 

}