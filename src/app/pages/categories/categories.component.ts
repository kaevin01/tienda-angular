import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { environment } from 'src/environments/environment.development';
import { CategoryModel } from 'src/app/models/category-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit{
  pageTitle : string = "Categorias";

  categories : CategoryModel[] = [];
  imgUrl : string = environment.urlImagesGlobal+"/categories/";

  constructor(private categorieService : CategoriesServiceService, private router : Router){}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categorieService.getCategoriesService().subscribe((data:CategoryModel[])=>{
      this.categories = data;
    })
  }
  goToList(id:number){
    this.router.navigate(['/list/category', id]);
  }

}
