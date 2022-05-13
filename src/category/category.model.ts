import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/product/product.model';

@Table({
  tableName: 'categories',
  timestamps: false,
  underscored: true,
})
export class Category extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => Product, 'category')
  products: Product[];
}
