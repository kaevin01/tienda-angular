import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProducByIdService} from 'src/app/services/produc-by-id.service';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit{

  product : ProductModel = new ProductModel({});
  urlImages : string = environment.urlImagesGlobal;
  urlImagePrime : string = this.urlImages;
  urlThumbs : string[] = [];
  relatedIds : string[] = [];
  relatedProducts : ProductModel[] = [];

  constructor(
    private route:ActivatedRoute,
    private productService : ProducByIdService
    ){};

  ngOnInit():void {
    const productId = this.route.snapshot.params["id"];

    this.productService.getProductById(productId).subscribe((element) => {
     
    this.product = element[0];
     this.urlImagePrime += "/products/"+this.product.imagenprincipal;
     this.urlThumbs = this.product.images.split(",");
     
     this.relatedIds = this.product.related.split(",");
     this.relatedIds.forEach(relatedId=>{
      const idRelated = Number(relatedId);
      this.productService.getProductById(idRelated).subscribe((prodRelated:ProductModel[])=>{
        this.relatedProducts.push(prodRelated[0]);
      });
     });
    
    });
  }
  toggleImage(url:string){
    this.urlImagePrime = environment.urlImagesGlobal +"/products/"+url;
  }
}
