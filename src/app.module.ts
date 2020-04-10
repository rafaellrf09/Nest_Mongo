import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './dogs/dogs.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/teste', { useUnifiedTopology: true, useNewUrlParser: true}), DogsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
