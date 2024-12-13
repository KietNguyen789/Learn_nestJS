// import { EntitySchema } from "typeorm";
// import { Staff } from "./Staff.entity";


// export const StaffSchema = new EntitySchema<Staff>({
//     name: 'Staff',
//     target: Staff,
//   columns: {
//     id: {
//       type: Number,
//       primary: true,
//       generated: true,
//     },
//     name: {
//       type: String,
//     },
//     role: {
//       type: String,
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   relations: {
//     photos: {
//       type: 'one-to-many',
//       target: 'Photo', // the name of the PhotoSchema
//     },
//   },
// })