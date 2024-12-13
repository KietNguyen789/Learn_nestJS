import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './Staff/Staff.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { pgConfig } from 'dbConfig';

@Module({
  imports: [StaffModule, TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
