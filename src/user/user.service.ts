import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository, Connection } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private connection: Connection,
    ) {}

    findById(id: number): Promise<UserEntity> {
        return this.userRepository.findOne(id);
    }

    // async saveUser(userData: UserDto) {
    //     const queryRunner = this.connection.createQueryRunner();
    //     await queryRunner.connect();
    //     await queryRunner.startTransaction();
    //
    //     try {
    //         const user = new UserEntity();
    //         user.id = userData.id;
    //         user.name = userData.name;
    //         user.email = userData.email;
    //         user.password = userData.password;
    //
    //         // throw new InternalServerErrorException('Error TEST!!'); // 일부러 에러를 발생시켜 본다
    //
    //         await queryRunner.manager.save(user);
    //         await queryRunner.commitTransaction();
    //     } catch (e) {
    //         console.log('로루배크!');
    //         await queryRunner.rollbackTransaction();
    //     } finally {
    //         console.log('트랜젝션 해제!');
    //         await queryRunner.release();
    //     }
    // }

    async saveUser(userData: UserDto) {
        await this.connection.transaction(async (manager) => {
            const user = new UserEntity();
            user.id = userData.id;
            user.name = userData.name;
            user.email = userData.email;
            user.password = userData.password;

            await manager.save(user);
        });
    }
}
