import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './dto/product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Product[] {
    return this.appService.getAll();
  }
}
