import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dto/registerUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('/register')
    register(@Body() registerUserDto: RegisterUserDTO){
        return this.authService.registerUser(registerUserDto)
    }
    
    @Post('/login')
    login(@Body() loginUserDto: LoginUserDTO){
        return this.authService.loginUser(loginUserDto)
    }
}
