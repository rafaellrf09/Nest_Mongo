import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDogDto {
    @IsNotEmpty()
    name: string;
    
    @IsNumber()
    age: number;

    @IsNotEmpty()
    breed: string;
}