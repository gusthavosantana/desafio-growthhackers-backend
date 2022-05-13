import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.model';

@Table({
  tableName: 'products',
  timestamps: false,
  underscored: true,
})
export class Product extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column
  @ForeignKey(() => Category)
  category: number;

  @BelongsTo(() => Category)
  productCategory: Category;
}
