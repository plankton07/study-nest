import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [TypeOrmModule],
    controllers: [UserController],
    providers: [UserService, UserResolver],
})
export class UserModule {}
