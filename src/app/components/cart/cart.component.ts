import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent{
  cartProducts : ProductModel[] = [];
  cartStatus : boolean = false;
  constructor(public cartService:CartService, private router:Router){
    this.cartProducts = this.cartService.getCartProducts();
  }
  toggleCart(){
    if(this.cartStatus){
      this.cartStatus = false;
    }else{
      this.cartStatus = true;
    }
  }
  goToOrder(){
    this.router.navigate(['/order']);
  }

}
