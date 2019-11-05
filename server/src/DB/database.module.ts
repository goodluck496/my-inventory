import { Global, Module }    from '@nestjs/common';
import { createConnection }  from 'typeorm';
import { config }            from '../_config';
// import { databaseProviders } from './database.providers';
import { entities }          from './entity/allEntities';
import { TypeOrmModule }     from '@nestjs/typeorm';

const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection(config.DB),
    },
];

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot(config.DB),
        TypeOrmModule.forFeature([...entities]),
    ],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {
}
