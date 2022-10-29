import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  home() {
    return 'welcome';
  }
}
