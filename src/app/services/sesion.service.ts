import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private loggedIn = false;
  public userData : any = {}

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login():void{
    this.loggedIn = true;
  }

  logout():void{
    this.loggedIn = false;
  }
  setUserData(data:any){
    this.userData=data;
  }
  getUserData():string{
    return this.userData;
  }
  getUserName(){
    return this.userData.nombre;
  }
}
