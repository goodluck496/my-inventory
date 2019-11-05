import { resolve } from 'path';
import { IConfig } from './IConfig';

export const localConfig: IConfig = {
    Microservice: {
    },
    APP: {
        port: 3000,
        cors: true
    },
    DB: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123',
        database: 'goo-my-inventory.develop',
        // entities: ['src/**/**.entity.ts', 'dist/**/**.entity.js'],
        entities: [resolve(__dirname, '..', '**', '*.entity.{js,ts}')],
        synchronize: true,
        logging: ['error'],
        migrations: ['./migrations/**/*.ts'],
        cli: {
            entitiesDir: './src/DB/entity',
            migrationsDir: './migrations',
        },
    },
};
