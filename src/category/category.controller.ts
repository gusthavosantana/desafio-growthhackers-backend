import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() data) {
    return this.categoryService.create(data);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findById(+id);
  }

  @Get(':id/products')
  getProducts(@Param('id') id: string) {
    return this.categoryService.getProducts(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.categoryService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.categoryService.remove(+id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
