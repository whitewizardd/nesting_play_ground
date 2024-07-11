import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // trying an asychronous function

  @Get('async')
  async get_name(): Promise<string> {
    return new Date().getMonth().toString();
  }
}
