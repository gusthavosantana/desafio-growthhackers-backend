import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private readonly model: typeof Product) {}

  create(data) {
    if (Array.isArray(data)) {
      return data.map((current) => this.model.create(current));
    }
    return this.model.create(data);
  }

  findAll() {
    return this.model.findAll();
  }

  findById(id: number) {
    return this.model.findByPk(id);
  }

  async update(id: number, data) {
    return await this.model.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.model.destroy({ where: { id } });
  }
}
