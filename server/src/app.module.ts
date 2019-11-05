import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule }      from '@nestjs/typeorm';
import { config }             from './_config';
import { entities }           from './DB/entity/allEntities';
import { _CoreModule }        from './Modules/_core.module';
import { ItemModule }         from './Modules/item/item.module';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        // TypeOrmModule.forRoot(config.DB),
        // TypeOrmModule.forFeature([...entities]),
        _CoreModule,
        ItemModule,
    ]
})
export class AppModule {
}
