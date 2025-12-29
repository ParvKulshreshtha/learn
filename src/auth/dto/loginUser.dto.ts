import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDTO {

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}