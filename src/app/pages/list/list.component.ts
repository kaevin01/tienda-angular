import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsByCategoryService } from 'src/app/services/products-by-category.service';
import { ProductByBrandService } from 'src/app/services/product-by-brand.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  productsList: ProductModel[] = [];
  titlePage : string = "";
  constructor(
    private route: ActivatedRoute,
    private productCategoryService: ProductsByCategoryService,
    private productByBrandService : ProductByBrandService
  ) {}
  ngOnInit(): void {
    const idCategory = this.route.snapshot.params['id_categoria'];

    const idBrand = this.route.snapshot.params['id_marca'];

    console.log("idCategory: ",idCategory)
    if(idCategory != undefined){
      this.titlePage = "Listado de productos por categoria";
      this.productCategoryService.getProductCategory(idCategory).subscribe((data) => {
        this.productsList = data;
      });
    }

    console.log("idBrand: ",idBrand)
    if(idBrand != undefined){
      this.titlePage = "Listado de productos por Marca";
      this.productByBrandService.getProductBrands(idBrand).subscribe((data) => {
        this.productsList = data;
      });
    }
  }
}
