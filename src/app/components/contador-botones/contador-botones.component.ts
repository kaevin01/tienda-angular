import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador-botones',
  templateUrl: './contador-botones.component.html',
  styleUrls: ['./contador-botones.component.scss']
})
export class ContadorBotonesComponent {
  @Output() incrementar = new EventEmitter<void>();
  @Output() decrementar = new EventEmitter<void>();
}
