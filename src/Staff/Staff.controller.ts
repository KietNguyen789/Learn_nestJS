import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Query, Body, Post, UsePipes, Patch, Header, Headers,  } from "@nestjs/common";
import { StaffService } from "./Staff.service";
//import  {Staff}  from "./dto/StaffSchema.dto";
import { StaffDto } from "./dto/StaffSDto.dto";
import { ValidationPipe } from "@nestjs/common";
import { ParamDto } from "./dto/ParamDto.dto";
import { ParseIdPipe } from "./pipes/ParseIdPipe";
import { ZodValidationPipe } from "./pipes/ZodValidationPipe";
import { ZodParamSchema } from "./dto/ZodParamDto.dto";
import { StaffDtoPipe } from "./dto/ZodParamDto.dto";
import { HeadersPipe } from "./pipes/CustomDecorator";
import { HeaderDto } from "./dto/HeadersDto.dto";
import { HttpStatus } from "@nestjs/common";
//import { MessageContextDto } from "./dto/message.dto";
import { Staff } from "../Entities/Staff.entity";

@Controller("staff")
export class StaffController{

    constructor(private readonly staffservice: StaffService){
       
    }

    @Get("all")
    async getAllStaff(): Promise<Staff[]>{
        const data = this.staffservice.findAll()
        return data//{
            // payload: {
            //     type: ['info'],
            //     status: HttpStatus.OK,
            //     data: data ? data : "No data"
            // }
       // }
    }
    @Get(":id")
    async getStaffId(
    @Param('id', ParseIntPipe) id:string, 
    @Query('sort', ParseBoolPipe) sort:boolean
    
):Promise<string>{
        return this.staffservice.findOneById(id)//`${id} SortQuery ${sort}` 
    }
    @Post()
    //whitelist luoc bo thuoc tinh khong co trong schema, 
    //forbidNonWhitelisted luon di sau whitelist. raise error khi gui thuoc tinh khong co trong entity
    
//    @UsePipes(new ValidationPipe({
// //    whitelist:true, 
// //     forbidNonWhitelisted:true,
//     //always:true,
//     groups:["create"],
// }))

    // GHI TRONG METHOD UU TIEN GLOBAL
    @UsePipes(new ZodValidationPipe(ZodParamSchema))
    // new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})
    // return similar datatype
    async createStaff(@Body() staffInfo:StaffDtoPipe) {
       
        //var NewStaff =  new StaffDto(staffInfo._id,staffInfo.name,staffInfo.role, staffInfo.method)
        staffInfo.method+=" create"
        return staffInfo
    }
    @Patch(':id')
    // @UsePipes(new ValidationPipe({
    //     //whitelist:true, 
    //     //forbidNonWhitelisted:true,
    //     groups:["update"],
    //     //always:true,
    //     // transform:true,
    //     // transformOptions:
    //     // {
    //     //     enableImplicitConversion: true,
    //     // }
        
    // }))
    updateStaff(
    @Param('id',ParseIdPipe ) id,
    @Body() staffInfo:StaffDto,
    @Headers() header,
    @HeadersPipe() headerValidate: HeaderDto
    // id tren url chuyen tu string sang int
    //@Param()  param:  ParamDto,
  

   )
    {
        staffInfo._id = id
        staffInfo.method += " update"
        staffInfo.role=header.host
       //staffInfo.name = param.name
        
        return staffInfo
    }

}