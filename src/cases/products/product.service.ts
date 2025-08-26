import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./product.entity"


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.repository.find({
      relations: ["category", "brand"],
    });
  }

  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne({
      where: { id },
      relations: ["category", "brand"],
    });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  async create(product: Product): Promise<Product> {
    return this.repository.save(product);
  }

  async update(id: string, product: Product): Promise<Product> {
    const existing = await this.findById(id);

    const updated = this.repository.merge(existing, product);
    return this.repository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findById(id);
    await this.repository.remove(product);
  }
}
