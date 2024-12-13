import { IsPositive, IsString, IsInt, Length } from "class-validator";


export class ParamDto{
    @IsInt()
    @IsPositive()
    id:Number

    @Length(1,10,{message:"name has invalid Length"})
    name:String
}