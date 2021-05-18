import { Injectable } from '@nestjs/common';

@Injectable()
export class SquaresService {

    getSqrNumber(params) {

        const sqrVal = params * params
        return sqrVal
    }

    getRootNUmber(params) {
        
        const sqrVal = Math.sqrt(params)
        return sqrVal
    }

}
