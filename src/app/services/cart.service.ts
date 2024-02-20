import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartProducts : ProductModel[] = [];
  private totalCart : number = 0;
  private apiOrder = environment.urlApiGlobalSendOrder;

  constructor(private http:HttpClient) { }

  addToCart(product : ProductModel):void{

   const encontrado : ProductModel | undefined = this.cartProducts.find
   (productCart=>productCart.id == product.id);
    if(encontrado == undefined){
      product.quantity = 1;

      this.cartProducts.push(product);

    }else{
      encontrado.quantity += 1;
    }
    this.calculateTotal();
  }

  removeFromCart(id: number) {

    const encontrado : number = this.cartProducts.findIndex((product) => product.id === id);
    if (encontrado !== -1) {
      this.cartProducts.splice(encontrado, 1); // Eliminar el elemento del array usando splice
    }
    this.calculateTotal();
  }

  resetCart(){
    this.cartProducts.splice(0, this.cartProducts.length);
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalCart = 0;
    this.cartProducts.forEach(item=>{
      this.totalCart += item.price * item.quantity;
    });
  }

  getCartProducts():ProductModel[]{
    return this.cartProducts;
  }

  getTotal():number{
    return this.totalCart;
  }

  saveOrder(userData:{}):Observable<any>{
    const pedido : any[] = [];
    pedido.push(this.cartProducts);
    pedido.push(userData);
    return this.http.post<any>(this.apiOrder, pedido)
  }

  getSessionCart(){
    const cartRecuperado = sessionStorage.getItem("cart")
    if(cartRecuperado != null){
      this.cartProducts = JSON.parse(cartRecuperado);
      this.calculateTotal();
    }
  }

  setSessionCart(){
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
}
