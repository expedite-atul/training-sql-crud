import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';
import { response } from 'express';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            console.log(`value to transform`, value);
            return await super.transform(value, metadata);
        } catch (e) {
            if (e instanceof BadRequestException) {
                console.error(`catch error in pipe`, JSON.stringify(e));
                throw new UnprocessableEntityException(this.handleError(e.getResponse()));
            }
        }
    }

    private handleError(errors: any) {
        console.error('pipe errors', errors);
        return Object.values(errors).map(error => error);
    }
}
