import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
    data: T;
}

@Injectable()
export class AppInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<Response<T>> {
        console.log('intercept run');
        // intercept를 통해 response 값을 수정
        return next.handle().pipe(
            map((content) => {
                console.log(
                    `AppInterceptor Response: ${JSON.stringify(content)}`,
                );
                content.ErrorMessage = 'AppInterceptor Message';
                content.Data.Uid = 1234;
                console.log(
                    `AppInterceptor Response: ${JSON.stringify(content)}`,
                );
                console.log('intercept end');
                return content;
            }),
        );
    }
}
