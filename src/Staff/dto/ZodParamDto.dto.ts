import {z} from 'zod'


//const Schema = z.object({})

export const ZodParamSchema = z
.object({
    _id:z.number().negative(),
    name:z.string(),
    role:z.string(),
    method:z.string(),
})
.required();

//  type StaffDtoPipe<T> = {
//     name:string,
//     inputSchema:T,
//     callback(input:T):any;

// }

// export default  {
//     name:'create',
//     inputSchema: ZodParamSchema,
//     callback(args) {}

// } satisfies StaffDtoPipe<typeof ZodParamSchema>



export type StaffDtoPipe =  z.infer<typeof ZodParamSchema>