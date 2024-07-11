import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly product_service: ProductService) {}

  @Post()
  add_product(
    @Body('title') title: string,
    @Body('description') desc: string,
    @Body('price') price: number,
  ) {
    return this.product_service.add_product(title, desc, price);
  }

  @Get()
  get_all_products(): object[] {
    return this.product_service.get_products();
  }

  @Get(':id')
  get_product_by_id(@Param('id') id: string) {
    return this.product_service.find_product_by_id(id);
  }
  @Patch(':id')
  update_product_by_id(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('desc') desc: string,
    @Body('price') price: number,
  ) {
    return this.product_service.update_product(id, title, desc, price);
  }

  @Delete(':id')
  delete_product_by_id(@Param('id') id: string) {
    return this.product_service.delete_product(id);
  }
}
