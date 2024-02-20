import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CategoryModel } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  apiCategories = environment.urlApisGlobalCategoria;

  constructor(private http:HttpClient) { }

  getCategoriesService():Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(this.apiCategories);
  }
}
