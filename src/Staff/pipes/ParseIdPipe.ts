
import { BadRequestException,
PipeTransform,
ArgumentMetadata,
Injectable
 } from "@nestjs/common";

 // lam sao khai bao 1 class
 // lam sao dinh nghia 1 decorator

 // Custom 1 ParseId from PipeTransform frame
 @Injectable()
export class ParseIdPipe implements PipeTransform<string,number> {
    transform(value:string , metadata: ArgumentMetadata): number{
        const val = parseInt(value,10)
        
        if (isNaN(val)) throw new BadRequestException('id must be a number')
        if(val<=0) throw new BadRequestException('id must be > 0')
        return  val
    }
}