import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-offer-list',
  templateUrl: './products-offer-list.component.html',
  styleUrls: ['./products-offer-list.component.scss']
})
export class ProductsOfferListComponent implements OnInit {

  products: ProductModel[]=[];

  constructor(private productService : ProductService){}

  ngOnInit():void{
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProductsService().subscribe(
      (data:ProductModel[])=>{
        //console.log(data)
        this.products = data.filter(data=>data.offer==1);
      })
  }
}
