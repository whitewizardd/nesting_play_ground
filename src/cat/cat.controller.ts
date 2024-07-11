import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCatDTO } from './dtos/CreateCat';
import { CatService } from './cat.service';
import { Cat } from './repo/CatRepo';

@Controller('cat')
export class CatController {
  constructor(private readonly cat_service: CatService) {}
  @Post()
  @HttpCode(201)
  create_cat(@Body() create_cat: CreateCatDTO): string {
    return this.cat_service.create_cat(create_cat);
  }

  @Get('g/:id')
  @HttpCode(200)
  get_cat_by_id(@Param('id') id: number): Cat {
    return this.cat_service.find_cat_by_id(id);
  }

  @Delete('d/:id')
  @HttpCode(200)
  delete_cat_by_id(@Param('id') id: number): string {
    return this.cat_service.delete_cat_by_id(id);
  }

  @Get('/u')
  @HttpCode(200)
  update_cat_by_id(
    @Param('id') id: number,
    @Body() update_cat_dto: Partial<CreateCatDTO>,
  ): { id: number; h: Partial<CreateCatDTO> } {
    return { id: id, h: update_cat_dto };
  }
  @Get()
  @HttpCode(200)
  get_all_cat(): Cat[] {
    return this.cat_service.get_all_cats();
  }
}
