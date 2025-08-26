import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-prueba-modal',
  imports: [ButtonModule, DialogModule,CommonModule,FormsModule,InputTextModule,FloatLabelModule],
  templateUrl: './prueba-modal.component.html',
  styleUrl: './prueba-modal.component.scss',
})
export class PruebaModalComponent {

  modal1 = signal(false);
  modal2 = signal(false);
  modal3 = signal(false);

  // Datos compartidos
  dataModal1To2 = signal('');
  dataModal2To3 = signal('');

  private topZ = 1000;

  bringToFront(id: string) {
    this.topZ++;

    // Selecciona el host de Angular
    const dlgHost = document.querySelector(`#${id}`);

    // Busca el contenedor real generado por PrimeNG
    const dlg = dlgHost?.nextElementSibling as HTMLElement;

    if (dlg && dlg.classList.contains('p-dialog')) {
      dlg.style.zIndex = String(this.topZ);
      console.log(`Traído al frente: ${id}, z-index ${this.topZ}`);
    }
  }

  zIndices = {
    modal1: 1000,
    modal2: 1000,
    modal3: 1000
  };
  
setDataModal1To2(event: Event) {
  const input = event.target as HTMLInputElement;
  this.dataModal1To2.set(input.value);
}

setDataModal2To3(event: Event) {
  const input = event.target as HTMLInputElement;
  this.dataModal2To3.set(input.value);
}


}
