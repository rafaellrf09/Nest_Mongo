import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Dog } from './dog.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDogDto } from './dto/create-dogs.dto';

@Injectable()
export class DogsService {
    constructor(@InjectModel('Dog') private dogModel: Model<Dog>) { }

    async create(createDogDto: CreateDogDto): Promise<Dog> {
        const newDog = new this.dogModel(createDogDto);
        return newDog.save();
    }

    async findAll(): Promise<Dog[]> {
        return this.dogModel.find().exec();
    }
}
