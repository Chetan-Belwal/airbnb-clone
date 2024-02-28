import { Column, IsEmail, Table, Unique } from "sequelize-typescript";
import { BaseModel } from "./base.model";

@Table({tableName:'users'})
export class UserModel extends BaseModel<UserModel>{
   @Column
   public name : string

   @Column
   public password: string

   @Unique
   @Column
   public email : string

   @Column
   public phone: string

   @Column
   public address : string

   @Column
   public profilephoto_name: string

}