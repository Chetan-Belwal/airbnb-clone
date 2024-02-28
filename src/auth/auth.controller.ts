import { Controller, Post, Body, Get, Redirect, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UsePipes(new ValidationPipe)
  @Post('/local/signup')
  public async signUpLocal(@Body() createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);
    return await this.authService.signupLocal(createAuthDto);
  }

  // @Post('/local/signin')
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.signinLocal(createAuthDto);
  // }

  // @Redirect('/auth/signin')
  // @Get('log_out')
  // public async logOut(@Res() res: Response) {
  //   const cookie = this.authService.clearCookie();
  //   res.setHeader('Set-Cookie', cookie);
  // }

}
