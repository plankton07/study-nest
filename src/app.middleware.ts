import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');

    use(req: Request, res: Response, next: () => void) {
        console.log('I`m Middleware V(^_^)v v(^_^)V');
        console.log(`req.body: ${JSON.stringify(req.body)}`);
        const { ip, method, originalUrl } = req;
        const userAgent = req.get('user-agent') || '';

        res.on('close', () => {
            const { statusCode } = res;
            // console.log(res);
            const contentLength = res.get('content-length');
            // res 값을 주작 할 수가 없어,, 주작은 커녕 읽어 올 수가,,,없어
            this.logger.log(
                `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
            );
            console.log('Middleware res close');
        });

        next();
        console.log('Middleware end');
    }
}
