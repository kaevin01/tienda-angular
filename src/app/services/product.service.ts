import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiProducts = environment.urlApiGlobalProductos;

  constructor(private http:HttpClient) { }

  getProductsService():Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.apiProducts);
  }
  
}
