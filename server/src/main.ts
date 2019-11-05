import { ValidationPipe } from '@nestjs/common';
import { NestFactory }    from '@nestjs/core';
import * as express       from 'express';
import * as path          from 'path';
import { config }         from './_config';
import { AppModule }      from './app.module';

(async function () {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    // const options = new DocumentBuilder()
    //   .setTitle('My inventory')
    //   .setVersion('1.0')
    //   .build();
    // const document = SwaggerModule.createDocument(app, options);
    // SwaggerModule.setup('apidocs', app, document);

    app.useGlobalPipes(new ValidationPipe());
    app.use('/uploads', express.static(path.join('./uploads')));
    await app.listen(config.APP.port);


    console.log(`Service start on ${config.APP.port} port`);
})();


