import { Module } from '@nestjs/common';
import { SquaresModule } from './squares/squares.module';


@Module({
  imports: [SquaresModule],
})
export class AppModule {}
