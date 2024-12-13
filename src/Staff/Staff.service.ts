import { Injectable } from "@nestjs/common";
//import { StaffDto } from "./dto/StaffSDto.dto";
import { Staff } from "../Entities/Staff.entity";
import { DataSource } from "typeorm";

@Injectable()
export class StaffService{
    constructor(private dataSource: DataSource){}

    async createMany(staffs: Staff[]){
    await this.dataSource.transaction(async manager => {
        staffs.forEach( async staff => {
            await manager.save(staff)
        })
    })
    }

    async getAllStaff(): Promise<string>{
        return "All"
    }

    async findAll():  Promise<Staff[]> {
        return []
    } 

    async findOneById(id:string): Promise<string>{
        return id
    }
    async UpdateOne(In_Staff:Staff):Promise<Staff>{
        In_Staff.id=99
        In_Staff.name="constname"
        In_Staff.role="constrole"
         return In_Staff
    }
}