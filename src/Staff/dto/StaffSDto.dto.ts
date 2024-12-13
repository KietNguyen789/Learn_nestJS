import { Param } from "@nestjs/common"
import { IsNumber, IsString, IsInt , Length, IsPositive} from "class-validator";
export class StaffDto{
    
    @IsInt()
 //   @IsPositive()
    _id:Number;

    @IsString()
    //@Length(1,10,{message:"Length must between 1 to 10 characters"})
    name:String;
    
    @IsString()
    role:String;
    
    @IsString()
   // @Length(1,2,{groups:["create"]})
    //@Length(1,3,{groups:["update"]})
    method:String
    
    constructor(In_id:Number, In_name:String, In_role:String, In_method:String){
        this._id = In_id
        this.name = In_name
        this.role = In_role
        this.method=In_method
    }

}