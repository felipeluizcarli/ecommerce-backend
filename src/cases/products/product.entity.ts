import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "src/cases/categories/category.entity";
import { Brand } from "../brands/brand.entity";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  name: string;

  @Column('text', {nullable: true})
  description: string;

  @Column('decimal', {nullable: false, precision: 10, scale: 2})
  price: number;

  @Column('boolean', {nullable: false, default: true })
  active: boolean;

  @ManyToOne(() => Category, { eager: false, nullable: false })
  category: Category;

  @ManyToOne(() => Brand, { eager: false, nullable: true })
  brand: Brand;

 
}
