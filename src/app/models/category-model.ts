export class CategoryModel {
  id : number;
  name : string;
  imagen : string;
  constructor(category:any){
    this.id = category.id;
    this.name = category.name;
    this.imagen = category.imagen;
  }
}
