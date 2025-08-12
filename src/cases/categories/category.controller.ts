import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { Controller, Param, ParseUUIDPipe } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @get()
  findAll(): Promise<Category[]> {
    return this.service.findAll();
  }
  '@Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
    return this.service.findById(id);
  }
}
