import { Component } from '@angular/core';

import { PruebaModalComponent } from "./prueba-modal/ui/prueba-modal/prueba-modal.component";
@Component({
  selector: 'app-root',
  imports: [PruebaModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';



}
