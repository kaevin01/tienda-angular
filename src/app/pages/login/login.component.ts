import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  pageTitle : string = "Login";
  email: string = "";
  password: string = "";
  msgError: string ='';

  constructor(private loginService: LoginService, public sesionService: SesionService, private router : Router){}
  onLogin(): void{
    this.loginService.login(this.password, this.email).subscribe({
      next: (response) => {
        if(response[0] != 0){
        this.sesionService.setUserData(response[0]);
        this.sesionService.login();
        } else {
          this.msgError = 'Usuario o contraseña no validos'
        }
      },
      error:(error)=>{
        console.log("error en login: ", error);
      }
    });
  }
  goToHistory(){
    this.router.navigate(['/history/'])
  }
}
