import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../database/models/users.model';
import { HashService } from './hash.service';

@Module({
  imports:[SequelizeModule.forFeature([UserModel])],
  controllers: [AuthController],
  providers: [AuthService, HashService],
})
export class AuthModule {}
