import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    // @Get('/search')
    // search(@Query('year') searchYear: string) {
    //     return `We are searching for a movie made after: ${searchYear}`;
    // }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Post('/test')
    run(@Body() data: CreateMovieDto) {
        console.log('run Action!!');
        return {
            Result: 'OK',
            ErrorMessage: null,
            Data: { Name: 'Ryan', Lv: 52, Hp: 2000, Mp: 250 },
        };
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }
}
