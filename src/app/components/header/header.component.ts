import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public session: SesionService, private router: Router){ }
  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToHistory(){
    this.router.navigate(['/history']);
  }

}
