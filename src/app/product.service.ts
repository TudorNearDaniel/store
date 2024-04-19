import { Injectable } from '@angular/core';
import { Products } from './shared/models/product';
@Injectable({
  providedIn: 'root'
})



export class ProductService {

  constructor() { }

  getAll(): Products[] {
    return [
      {
        id: 1,
        name: 'Product 1', // Add the 'name' property
        price: 900,
        imageUrl: '/assets/Products/placeholder.jpg',
      },
      {
        id: 2,
        name: 'Product 2', // Add the 'name' property
        price: 9360,
        imageUrl: '/assets/Products/placeholder.jpg',
      },
      {
        id: 3,
        name: 'Product 3', // Add the 'name' property
        price: 1230,
        imageUrl: '/assets/Products/placeholder.jpg',
      },
      {
        id: 4,
        name: 'Product 4', // Add the 'name' property
        price: 932,
        imageUrl: '/assets/Products/placeholder.jpg',
      },{
        id: 5,
        name: 'Product 5', // Add the 'name' property
        price: 50,
        imageUrl: '/assets/Products/placeholder.jpg',
      }
    ];
  }
}