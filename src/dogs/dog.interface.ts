import { Document } from 'mongoose'

export class Dog  extends Document {
    name: string;
    age: number;
    breed: string;
}