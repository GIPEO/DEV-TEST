import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PickListModule } from 'primeng/picklist';

@Component({
  selector: 'app-prueba-modal',
  imports: [ButtonModule, DialogModule, CommonModule, FormsModule, InputTextModule, FloatLabelModule, PickListModule],
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

  // Índices de navegación por modal
  indexModal1 = signal(0);
  indexModal2 = signal(0);
  indexModal3 = signal(0);

// Ingeniería de Sistemas
itemsModal1 = [
  { ciclo: 'CICLO I', cursos: ['Matemática I', 'Programación I', 'Física I'] },
  { ciclo: 'CICLO II', cursos: ['Matemática II', 'Programación II', 'Bases de Datos'] },
  { ciclo: 'CICLO III', cursos: ['Estructuras de Datos', 'Sistemas Operativos', 'Redes'] },
  { ciclo: 'CICLO IV', cursos: ['Ingeniería de Software', 'Base de Datos Avanzada', 'Inteligencia Artificial'] },
  { ciclo: 'CICLO V', cursos: ['Seguridad Informática', 'Redes Avanzadas', 'Desarrollo Web'] },
  { ciclo: 'CICLO VI', cursos: ['Administración de Proyectos', 'Big Data', 'Programación Móvil'] },
  { ciclo: 'CICLO VII', cursos: ['Tesis', 'Ética Profesional', 'Emprendimiento Tecnológico'] }
];

// Enfermería
itemsModal2 = [
  { ciclo: 'CICLO I', cursos: ['Anatomía', 'Biología', 'Ética Profesional'] },
  { ciclo: 'CICLO II', cursos: ['Farmacología', 'Microbiología', 'Salud Pública'] },
  { ciclo: 'CICLO III', cursos: ['Enfermería Clínica', 'Psicología', 'Nutrición'] },
  { ciclo: 'CICLO IV', cursos: ['Patología', 'Cuidados Intensivos', 'Administración Sanitaria'] },
  { ciclo: 'CICLO V', cursos: ['Enfermería Comunitaria', 'Investigación Clínica', 'Gestión de Enfermería'] },
  { ciclo: 'CICLO VI', cursos: ['Ética en Salud', 'Terapias Especiales', 'Salud Mental'] },
  { ciclo: 'CICLO VII', cursos: ['Prácticas Avanzadas', 'Tesis', 'Emprendimiento en Salud'] }
];

// Ingeniería Industrial
itemsModal3 = [
  { ciclo: 'CICLO I', cursos: ['Dibujo Técnico', 'Matemática I', 'Química'] },
  { ciclo: 'CICLO II', cursos: ['Estadística', 'Procesos Industriales', 'Organización'] },
  { ciclo: 'CICLO III', cursos: ['Gestión de Producción', 'Logística', 'Mecánica Aplicada'] },
  { ciclo: 'CICLO IV', cursos: ['Seguridad Industrial', 'Calidad Total', 'Ingeniería Económica'] },
  { ciclo: 'CICLO V', cursos: ['Investigación de Operaciones', 'Gestión de Proyectos', 'Ergonomía'] },
  { ciclo: 'CICLO VI', cursos: ['Simulación de Procesos', 'Lean Manufacturing', 'Gestión Ambiental'] },
  { ciclo: 'CICLO VII', cursos: ['Tesis', 'Optimización de Sistemas', 'Ética Profesional'] }
];


  modalActivo = signal<number | null>(null);

  private topZ = 1000;

bringToFront(id: string, modalNum: number) {
  this.topZ++;
  this.modalActivo.set(modalNum);

  const dlgHost = document.querySelector(`#${id}`);
  const dlg = dlgHost?.nextElementSibling as HTMLElement;

  if (dlg && dlg.classList.contains('p-dialog')) {
    dlg.style.zIndex = String(this.topZ);
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


  sourceItems = [
    { name: 'Elemento 1' },
    { name: 'Elemento 2' },
    { name: 'Elemento 3' }
  ];

  currentIndex = 0;

  // Funciones de navegación genéricas
prev() {
  if (this.modalActivo() === 1 && this.indexModal1() > 0) this.indexModal1.set(this.indexModal1() - 1);
  if (this.modalActivo() === 2 && this.indexModal2() > 0) this.indexModal2.set(this.indexModal2() - 1);
  if (this.modalActivo() === 3 && this.indexModal3() > 0) this.indexModal3.set(this.indexModal3() - 1);
}

next() {
  if (this.modalActivo() === 1 && this.indexModal1() < this.itemsModal1.length - 1) this.indexModal1.set(this.indexModal1() + 1);
  if (this.modalActivo() === 2 && this.indexModal2() < this.itemsModal2.length - 1) this.indexModal2.set(this.indexModal2() + 1);
  if (this.modalActivo() === 3 && this.indexModal3() < this.itemsModal3.length - 1) this.indexModal3.set(this.indexModal3() + 1);
}

goFirst() {
  if (this.modalActivo() === 1) this.indexModal1.set(0);
  if (this.modalActivo() === 2) this.indexModal2.set(0);
  if (this.modalActivo() === 3) this.indexModal3.set(0);
}

goLast() {
  if (this.modalActivo() === 1) this.indexModal1.set(this.itemsModal1.length - 1);
  if (this.modalActivo() === 2) this.indexModal2.set(this.itemsModal2.length - 1);
  if (this.modalActivo() === 3) this.indexModal3.set(this.itemsModal3.length - 1);
}
}
