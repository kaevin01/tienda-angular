import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment.development';
import { UserModel } from 'src/app/models/user-model';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  cartProducts : ProductModel[] = [];
  titlePage : string = "Resumen pedido"
  rutaImagen : string = environment.urlImagesGlobal+"/products/";
  totalPedido : number = 0;
  pedidoCompletado : boolean = false;
  mensajeCompletado : string = '';

  constructor(private cartService : CartService, public session: SesionService){
    this.cartProducts= this.cartService.getCartProducts();

    this.cartProducts.forEach((product)=>{
      this.totalPedido += product.price * product.quantity;
    });

    
  }
  saveOrderClick(){
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const fechaEnFormato = `${year} - ${month} - ${day}`;
    const user: UserModel = new UserModel(this.session.getUserData());
    const datosPedido: {} = {
      id: user.id,
      nombre: user.nombre,
      fecha: fechaEnFormato,
    };
    this.cartService.saveOrder(datosPedido).subscribe({
      next:(response)=>{
        this.pedidoCompletado= true;
        this.mensajeCompletado = `Gracias ${user.nombre} por tu compra. ${response}`;
        this.cartService.resetCart();
      },
      error: (error) => {
        console.log('Error en el pedido; ', error);
      },
    })
  }
}
