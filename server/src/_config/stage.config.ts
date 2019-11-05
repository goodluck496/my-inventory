import { IConfig } from './IConfig';

export const stageConfig: IConfig = {
    Microservice: {},
    APP: {
        port: 3010,
        cors: true
    },
    DB: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'PHST19qwnp5',
        database: 'goo-my-inventory.stage',
        entities: ['dist/**/**.entity.js'],
        synchronize: true,
        logging: false,
        // subscribers: ['dist/DB/subscribers/**.subscriber.js'],
        // migrations: ['./migrations/**/*.js'],
        // cli: {
        //     entitiesDir: './dist/DB/entity',
        //     migrationsDir: './migrations',
        // },
    },
};
