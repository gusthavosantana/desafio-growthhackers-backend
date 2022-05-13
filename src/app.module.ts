import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import databaseConfig from './config/database/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(databaseConfig),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
