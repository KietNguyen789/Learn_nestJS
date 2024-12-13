import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { ZodSchema } from "zod";


export class ZodValidationPipe implements PipeTransform <string,number> {
    constructor(private schema:ZodSchema){}
    transform(value: any, metadata: ArgumentMetadata): number {
       
            const parsedValue = this.schema.safeParse(value)
            if(parsedValue.success) return parsedValue.data
        
            throw new BadRequestException(parsedValue.error.format())
        }
    }



