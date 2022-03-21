import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { AppMiddleware } from './app.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.use(AppMiddleware);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );
    await app.listen(3000);
}
bootstrap();
