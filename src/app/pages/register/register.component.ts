import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  pageTitle : string = 'Registro';
  formData: any = {};

  constructor(private registerService: RegisterService){}

  onSubmit(): void{
    console.log("this.formData:", this.formData);

    this.registerService.registerUser(this.formData).subscribe((data: any)=>{
      console.log("Registro completado", data);
    });
  }

}
