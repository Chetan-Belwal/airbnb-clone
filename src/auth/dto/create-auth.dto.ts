import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsNumber, IsString, Max, MaxLength } from 'class-validator';
import { Length } from 'sequelize-typescript';

export class CreateAuthDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: "Username"})
    public name: string;
  
    @IsString()
    @ApiProperty({type: String, description: "Email"})
    public email: string;
  
    @IsString()
    @ApiProperty({type: String, description: "Password"})
    public password: string;

    @IsString()
    @ApiProperty({type:Number, description:"Users Phone number"})
    public phone: string

    @IsString()
    @ApiProperty({type: String, description: "Address of the user"})
    public address: string;

    //Profile photo is yet to be configured please find a way

  }

