import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Role } from "src/user/user.types";

export class RegisterUserDTO {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsEnum(Role)
    role: string;
}