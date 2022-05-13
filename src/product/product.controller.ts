import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Response,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() data) {
    return this.productService.create(data);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.productService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Post('/:category/import')
  @UseInterceptors(FileInterceptor('file'))
  import(
    @Param('category') category: number,
    @UploadedFile() data: Express.Multer.File,
  ) {
    return this.productService.import({ category, data });
  }

  @Get('/:category/export')
  async export(
    @Param('category') category: number,
    @Response({ passthrough: true }) res,
  ) {
    const data = await this.productService.findByCategory(category);

    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="package.json',
    });

    return data;
  }
}
