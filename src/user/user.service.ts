import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUserDTO } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    async createUser(registerUserDto: RegisterUserDTO){
        const {name, email, password, role} = registerUserDto
        try{

            return await this.userModel.create({
                name, email, password, role
            })
        } catch(err) {
            const DUPLICATE_KEY_CODE = 11000
            if(err.code===DUPLICATE_KEY_CODE){
                throw new ConflictException(`Email is already taken`)
            }else{
                throw err
            }
        }
    }

    async getUserById(id: string){
        return await this.userModel.findOne({_id:id})
    }
}
