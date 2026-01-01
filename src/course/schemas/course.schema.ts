import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export  type CourseDocument= HydratedDocument<Course>

@Schema()
export class Course{
    @Prop({required: true, unique: true})
    name: string;
    @Prop({ })
    description: string;
    @Prop({required: true})
    level: string;
    @Prop({})
    price: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course)