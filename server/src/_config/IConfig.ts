import { ConnectionOptions } from "typeorm"

export class IConfig {
    Microservice?: {
        [key: string]: {
            host: string,
            port: number
        }
    };
    APP: {
        port: number,
        cors: boolean
    };
    DB: ConnectionOptions
}