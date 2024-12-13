import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Staff } from "src/Entities/Staff.entity";
import { Photo } from "src/Entities/Photo.entity";
import { join } from "path";

export const pgConfig:PostgresConnectionOptions = {

url:"postgresql://StaffInfo_owner:fodEcLrAaD05@ep-steep-snow-a1rdswt5.ap-southeast-1.aws.neon.tech/StaffInfo?sslmode=require",
type:"postgres",
port: 3306,
entities:[__dirname + '/src/Entities/*.entity.{ts,js}'],//Staff,Photo],
synchronize:true
}