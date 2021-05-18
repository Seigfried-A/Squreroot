import { Controller, Get, Param } from '@nestjs/common';
import { SquaresService } from './squares.service';

@Controller()
export class SquaresController {
    constructor(private readonly squaresService: SquaresService) {}

    @Get('squares/:id')
    getSquare(@Param() params):number {
         return this.squaresService.getSqrNumber(params.id)
    }

    @Get('sqaure-root/:id')
    getSquareRoot(@Param() params):number {
         return this.squaresService.getRootNUmber(params.id)
    }

}
