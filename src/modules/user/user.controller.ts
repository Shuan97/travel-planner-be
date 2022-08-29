import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly logger = new Logger(UserController.name);

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // this.logger.log(id);
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() body: any) {
    return this.userService.create(body);
  }
}
