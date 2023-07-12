import { Injectable, PipeTransform, ArgumentMetadata, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseHandler {
    public sendResponse(
        res: Response,
        statusCode: number,
        success: boolean,
        message: string,
        data?: any,
    ) {
        const response = {
            statusCode,
            success,
            message,
            data: data ? data : {},
        };
        console.log(`final response -->`, response);
        res.status(statusCode).json(response);
    }


    sendErrorResponse(
        res: Response,
        statusCode: number,
        message: string,
        data?: any,
    ) {
        const response = {
            res,
            statusCode,
            success: false,
            message,
            errorDescription: data ? data : {},
            type: 'BAD_REQUEST',
        };

        throw new HttpException(response, statusCode);
    }
}
