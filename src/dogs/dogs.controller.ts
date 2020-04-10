import { Controller, Get, ValidationPipe, Query, Post, UsePipes, Body } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dog.interface';
import { CreateDogDto } from './dto/create-dogs.dto';

@Controller('dogs')
export class DogsController {

    constructor(private dogService: DogsService) { }

    @Get()
    dogs(): Promise<Dog[]> {
        return this.dogService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createDog( @Body() createDogDto : CreateDogDto ): Promise<Dog> {
        return this.dogService.create(createDogDto);
    }
}
