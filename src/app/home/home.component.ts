import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../shared/models/product'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products:Products[] = [];
  constructor(private productService:ProductService, private route:ActivatedRoute){}

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.products = this.productService.getAll().filter(product => 
          product.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      } else {
        this.products = this.productService.getAll();
      }
    });
  };
}