import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { OrderHistoryService } from 'src/app/services/order-history.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  titlePage: string = 'Historial de pedidos';
  user: any;
  fecha: string ="";
  pedidos: any[] =[];
  urlImages : string = environment.urlImagesGlobal+"/products/";

  constructor(public session:SesionService, private orderHistoryService:OrderHistoryService, private router: Router){}

  ngOnInit(): void{
    this.user = this.session.getUserData();
    console.log(this.user);

    this.orderHistoryService.getOrderHistory(this.user.id).subscribe((data:any[])=>{
      console.log('data', data);
      console.log('data User', this.user.id);

      this.pedidos = data;
    })
  }

  calcularTotalPedido(pedido:any):number{
    let total = 0;
    for (let item of pedido.items){
      total += item.precio_producto * item.cantidad_producto;
    }
    return total;
  }

  goToLogin(){
    this.router.navigate(["/login"])
  }
}
