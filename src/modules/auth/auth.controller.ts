import {
    Body,
    Controller,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { ResponseHandler } from 'src/core/pipes/response.pipe';
import { HttpStatusCodes, STATUS_MSG } from 'src/core/constants';
import { Response, Request } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private readonly responseHandler: ResponseHandler) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    // @ApiHeader({Authorization})
    async login(
        @Req() req: Request,
        @Res() res: Response,
    ) {
        const response = await this.authService.login(req.user);
        console.log(response, 'login response');
        return this.responseHandler.sendResponse(res, HttpStatusCodes.CREATED, true, STATUS_MSG.SUCCESS.message, response);
    }

    @UseGuards(DoesUserExist)
    @Post('signup')
    async signUp(
        @Req() req: Request,
        @Res() res: Response,
        @Body() user: UserDto,
    ) {
        const response = await this.authService.create(user);
        console.log(response, 'signup response');
        return this.responseHandler.sendResponse(res, HttpStatusCodes.CREATED, true, STATUS_MSG.SUCCESS.message, response);
    }
}
