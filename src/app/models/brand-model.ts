export class BrandModel {
  id : number;
  name : string;
  imagen: string;

  constructor(brand:any) {
    this.id= brand.id;
    this.name= brand.name;
    this.imagen = brand.imagen;
  }
}
