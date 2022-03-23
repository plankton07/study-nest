import { Args, Query, Int, Resolver } from '@nestjs/graphql';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserEntity)
    async user(@Args('id', { type: () => Int }) id: number) {
        return this.userService.findById(id);
    }
}
