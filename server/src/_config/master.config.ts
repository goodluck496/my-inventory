import { IConfig } from './IConfig';

export const masterConfig: IConfig = {
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
        database: 'goo-my-inventory.master',
        entities: ['dist/**/**.entity.js'],
        synchronize: false,
        logging: false,
        subscribers: ['dist/DB/subscribers/**.subscriber.js'],
        migrations: ['./migrations/**/*.js'],
        cli: {
            entitiesDir: './dist/DB/entity',
            migrationsDir: './migrations',
        },
    },
};
