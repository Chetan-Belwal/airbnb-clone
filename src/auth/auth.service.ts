import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UserModel } from '../database/models/users.model';
import { InjectModel } from '@nestjs/sequelize';
import { HashService } from './hash.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
    private hashService: HashService,
  ) {}
  public async signupLocal(createAuthDto: CreateAuthDto) {
    const password = await this.hashService.encodePassword(
      createAuthDto.password,
    );
    createAuthDto.password = password;
    return await this.userModel.build().set(createAuthDto).save();
  }

  public signinLocal() {}

  public clearCookie() {}
}
