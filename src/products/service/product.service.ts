import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  add_product(title: string, desc: string, price: number): string {
    const id: string = (this.products.length + 1).toString();
    const product = new Product(id, title, desc, price);
    this.products.push(product);
    return 'product added successfully...';
  }

  get_products(): Product[] {
    const new_products = this.products;
    return new_products;
  }

  find_product_by_id(id: string) {
    const product_index: number = this.get_product_index_by_id(id);
    const gotten_product: Product = this.products[product_index];
    this.generate_error_message(gotten_product);
    return gotten_product;
  }

  update_product(id: string, title: string, desc: string, price: number) {
    const gotten_product_index: number = this.get_product_index_by_id(id);
    const gotten_product: Product = this.products[gotten_product_index];
    this.generate_error_message(gotten_product);
    if (title) {
      gotten_product.title = title;
    }
    if (desc) {
      gotten_product.description = desc;
    }
    if (price) {
      gotten_product.price = price;
    }
    this.products[gotten_product_index] = gotten_product;
    return 'updated successfully...';
  }

  delete_product(id: string) {
    const index: number = this.get_product_index_by_id(id);
    this.products.splice(index, 1);
    return 'successfully deleted...';
  }

  generate_error_message(product: Product) {
    if (!product) {
      throw new NotFoundException('could not find product...');
    }
  }
  private get_product_index_by_id(id: string) {
    const found_product_index: number = this.products.findIndex(
      (p) => p.id === id,
    );
    return found_product_index;
  }
}
