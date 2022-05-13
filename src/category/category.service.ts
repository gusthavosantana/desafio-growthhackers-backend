import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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
    return this.model.findAll();
  }

  findById(id: number) {
    return this.model.findByPk(id);
  }

  async update(id: number, data) {
    const category = await this.model.findByPk(id);

    category.name = data.name;

    return await category.save();
  }

  remove(id: number) {
    return this.model.destroy({ where: { id } });
  }
}
