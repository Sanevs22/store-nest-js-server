import { Injectable } from '@nestjs/common';
import { Product } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productEnptity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(productEnptity)
    private readonly productRepository: Repository<productEnptity>,
  ) {}

  create(product: Product): Promise<productEnptity> {
    const createProduct = new productEnptity();
    createProduct.title = product.title;
    createProduct.price = Number(product.price);
    createProduct.description = product.description;
    createProduct.image = product.image;

    return this.productRepository.save(createProduct);
  }

  async getAll(): Promise<productEnptity[]> {
    return this.productRepository.find();
  }
}
