import { Column, ForeignKey, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";
import { UserModel } from "./users.model";

@Table({tableName:'hosts'})
export class HostModel extends BaseModel<HostModel>{
   @Column
   @ForeignKey(() => UserModel)
   public user_id : number

   @Column
   public bank_account_number: number

   @Column
   public number_of_listing : number

}