import { Module, HttpModule, Global } from '@nestjs/common';
import { TypeOrmModule }              from "@nestjs/typeorm";
import { config }                     from '../_config';
import { DatabaseModule }             from '../DB/database.module';
import { entities }                   from "../DB/entity/allEntities";

@Global()
@Module({
    imports: [
        DatabaseModule,
        HttpModule
    ],
    exports: [
        DatabaseModule,
        HttpModule
    ]
})
export class _CoreModule{}