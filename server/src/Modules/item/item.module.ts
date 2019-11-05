import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule }      from '@nestjs/typeorm';
import { entities }           from '../../DB/entity/allEntities';
import { _CoreModule }        from '../_core.module';
import { ItemController }     from './item.controller';


@Module({
    imports: [
        // HttpModule,
    ],
    controllers: [ItemController],
    providers: [ItemController],
    exports: [ItemController]
})
export class ItemModule {
}