import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  urlApiRegister = environment.urlApiGlobalRegister;

  constructor(private http : HttpClient) { }

  registerUser(formaData:any):Observable<any>{

    return this.http.post<any>(this.urlApiRegister, formaData);

  }
}
