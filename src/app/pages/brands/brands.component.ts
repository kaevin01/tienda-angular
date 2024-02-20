import { Component } from '@angular/core';
import { BrandServiceService } from 'src/app/services/brand-service.service';
import { Router } from '@angular/router';
import { BrandModel } from 'src/app/models/brand-model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  pageTitle: string = 'Marcas';
  brands: BrandModel[] = [];
  imgUrl: string = environment.urlImagesGlobal + '/brands/';
  constructor(
    private brandService: BrandServiceService,
    private router: Router
  ) {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((data: BrandModel[]) => {
      this.brands = data;
    });
  }
  goToList(id: number) {
    console.log("id de marca: ",id)
    this.router.navigate(['/list/brand/', id]);
  }
}
