import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findById(Id: string): Promise<Category> {
    return this.repository.findOneBy({ id: Id });
  }

  save(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
