// import Customer from "../../../domain/customer/entity/customer";
import Product from '../../../domain/product/entity/product'

// import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";

// import {
//   InputListCustomerDto,
//   OutputListCustomerDto,
// } from "./list.product.dto";
import { InputListProductDto, OutputListProductDto } from "./list.product.dto";


export default class ListProductUseCase {
  private productRepository: ProductRepositoryInterface;
  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(input: InputListProductDto): Promise<OutputListProductDto> {
    const products = await this.productRepository.findAll();
    return OutputMapper.toOutput(products);
  }
}

class OutputMapper {
  static toOutput(product: Product[]): OutputListProductDto {
    return {
      products: product.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price
      })),
    };
  }
}
