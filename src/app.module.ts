import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { AppMiddleware } from './app.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppInterceptor } from './app.interceptor';

@Module({
    imports: [MoviesModule],
    controllers: [AppController],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: AppInterceptor,
        },
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(AppMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.POST });
    }
}
