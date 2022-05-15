import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import CategoryHasProductsError from 'src/errors/CategoryHasProductsError';
import { Product } from 'src/product/product.model';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private readonly model: typeof Category) {}

  create(data) {
    if (Array.isArray(data)) {
      return data.map((current) => this.model.create(current));
    }
    return this.model.create(data);
  }

  findAll() {
    return this.model.findAll({ order: [['id', 'ASC']] });
  }

  findById(id: number) {
    return this.model.findByPk(id);
  }

  async getProducts(id: number) {
    const data = await this.model.findOne({
      where: { id },
      include: Product,
    });

    return data;
  }

  async update(id: number, data) {
    const category = await this.model.findByPk(id);

    category.name = data.name;

    return await category.save();
  }

  async remove(id: number) {
    const category = await this.model.findByPk(id, { include: Product });

    if (category.products && category.products.length > 0) {
      throw new CategoryHasProductsError();
    }
    this.model.destroy({ where: { id } });
  }
}
