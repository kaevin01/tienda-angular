import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product-model';
import { ProductsByCategoryService } from '../services/products-by-category.service';
import { ProductByBrandService } from '../services/product-by-brand.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  productsByCategory: ProductModel[] = [];
  productsList: ProductModel[]=[];
  titlePage : string="";
  constructor(
    private route: ActivatedRoute,
    private productCategoryService: ProductsByCategoryService,
    private productByBrandService : ProductByBrandService
  ) {}
  ngOnInit(): void {
    const idCategory = this.route.snapshot.params['id_categoria'];
    const idBrand = this.route.snapshot.params['id_marca'];

    if(idCategory != undefined){
      this.titlePage = "Listado de categorías",
      this.productCategoryService.getProductCategory(idCategory).subscribe((data)=>{
         this.productsList = data;
    });
    }
    if(idBrand != undefined){
      this.titlePage = "Listado de marcas",
      this.productCategoryService.getProductBrands(idBrand).subscribe((data)=>{
         this.productsList = data;
    });
    }
  }
}
