import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment.development';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-minature',
  templateUrl: './product-minature.component.html',
  styleUrls: ['./product-minature.component.scss'],
})
export class ProductMinatureComponent {
  urlImages: string = environment.urlImagesGlobal + '/products/';
  @Input() product: ProductModel = new ProductModel({});

  constructor(
    private router: Router, 
    private cartService: CartService
    ) {}

  navigateToDetails(): void {
    const productId = this.product.id;
    this.router.navigate(['/details', productId]);
  }

  addToCartClick(): void {
    //console.log("addtoCart:",this.product);
    this.cartService.addToCart(this.product);
  }
}