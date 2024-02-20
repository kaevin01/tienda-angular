import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = environment.urlApiGlobalLogin;

  constructor(private http: HttpClient) { }

  login(password: string, email: string): Observable<any>{
    return this.http.get<any>(this.loginUrl +"?email="+email+"&password="+password)
  }
}
