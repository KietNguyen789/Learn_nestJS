import { createParamDecorator , ExecutionContext} from "@nestjs/common";
import { BadRequestException,
    PipeTransform,
    ArgumentMetadata,
    Injectable
     } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
    export const HeadersPipe =  createParamDecorator(
        async (GoalDto: any, ctx: ExecutionContext) => {
          const header = ctx.switchToHttp().getRequest().header;
          const dto= plainToInstance(GoalDto, header, {
            excludeExtraneousValues:true
          })
           await validateOrReject(dto)
          return dto
        
        },
      );