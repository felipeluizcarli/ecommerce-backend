import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';
import { ProductModule } from './cases/products/product.module';

@Module({
  imports: [
    ConfifigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,    
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true
    }),
    CategoryModule,
    BrandModule,
    ProductModule
  ],
})
export class AppModule {}