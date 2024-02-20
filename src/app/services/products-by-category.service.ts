import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsByCategoryService {

  apiProducts = environment.urlApiGlobalProductos;
  
  listaProductos : ProductModel[] = [];

  constructor(private http:HttpClient) {}

  getProductCategory(id:number):Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.apiProducts+"?id_categoria="+id);
  }
}
