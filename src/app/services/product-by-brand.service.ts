import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductByBrandService {

  apiProducts = environment.urlApiGlobalProductos;

  listaProductos : ProductModel[] = [];

  constructor(private http:HttpClient) {}

  getProductBrands(id:number):Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.apiProducts+"?id_marca="+id);
  }
}
