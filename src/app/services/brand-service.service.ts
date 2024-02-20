import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from '../models/brand-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {
  apiMarcas = environment.urlApiGlobalMarcas;
  constructor(private http:HttpClient) { }
  getBrands():Observable<BrandModel[]>{
    return this.http.get<BrandModel[]>(this.apiMarcas);
  }
}
