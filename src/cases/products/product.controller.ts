import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.service.findAll();
  }

  @Get(":id")
  findById(@Param("id", ParseUUIDPipe) id: string): Promise<Product> {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.service.create(product);
  }

  @Put(":id")
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.service.update(id, product);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id", ParseUUIDPipe) id: string): Promise<void> {
    return this.service.remove(id);
  }
}
