import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dto/registerUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly userService: UserService
    ){}
    @Post('/register')
    register(@Body() registerUserDto: RegisterUserDTO){
        return this.authService.registerUser(registerUserDto)
    }
    
    @Post('/login')
    login(@Body() loginUserDto: LoginUserDTO){
        return this.authService.loginUser(loginUserDto)
    }

    @UseGuards(AuthGuard)
    @Get('/profile')
    async profile(@Request() req){
        const userId = req.user.sub
        const user = await this.userService.getUserById(userId)
        console.log(user)
        return user
    }
}
