import { Injectable } from '@angular/core';
import { Product } from '../Product';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    const products: Product[] = [];

    products.push(
      new Product('OL Style Stereo Solid Color Tote Bag', 'https://ss.tbdress.com/images/product/c/100542/11457/11457133_7.jpeg', '',17.50, 5, 0, false),
      new Product('Retro Argyle Chain Women Cross Body Bag', 'https://ss.tbdress.com/images/product/11/11440/11440844_16.jpg', '', 44.90, 3, 0, false),
      new Product('Folk Blue & White Porcelain Pattern Women', 'https://ss.tbdress.com/images/product/12/12137/12137903_1.jpg', '', 20.99, 13, 0, false),
    );
    return products;
  }

}
