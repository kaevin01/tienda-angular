export class ProductModel {
  id:number;
  name:string;
  id_category:number;
  category_name:string;
  description:string;
  price:number;
  stock:number;
  destacado:number;
  offer:number;
  id_brand: number;
  brand_name: string;
  images: string;
  imagenprincipal : string;
  related : string; // "2,4,6,11"
  quantity : number;
  constructor(product:any) {
    this.id = product.id;
    this.name = product.name;
    this.id_category = product.id_category;
    this.category_name = product.category_name;
    this.description = product.description;
    this.price = product.price;
    this.stock = product.stock;
    this.destacado = product.destacado;
    this.offer = product.offer;
    this.id_brand = product.id_brand;
    this.brand_name = product.brand_name;
    this.imagenprincipal = product.imagenprincipal;
    this.images = product.images;
    this.related = product.related;
    this.quantity = 0;
  }
}
