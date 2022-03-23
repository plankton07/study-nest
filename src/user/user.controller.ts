import { Controller, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(readonly userService: UserService) {}

    @Post('/add_user')
    saveUser(@Body() userData: UserDto) {
        return this.userService.saveUser(userData);
    }

    @Post('/find_user')
    findUser(@Body() userData: { id: number }) {
        return this.userService.findById(userData.id);
    }
}
