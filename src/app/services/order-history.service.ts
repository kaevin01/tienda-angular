import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  apiUrl = environment.urlApiGlobalGetOrder;

  constructor(private http:HttpClient) { }

  getOrderHistory(id:number):Observable<any[]>{
    console.log('id Servicio',id);

    return this.http.get<any[]>(this.apiUrl+"?id_cliente="+id);
  }
}
