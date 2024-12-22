import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [
    IonicModule, // Para componentes de Ionic
    CommonModule, // Para directivas como *ngIf
    FormsModule // Para [(ngModel)]
  ],
})
export class CirculoComponent {
  radio: number = 0; // Valor inicial del radio
  resultado: number | null = null; // Resultado del cálculo

  // Método para calcular el perímetro
  calcular() {
    this.resultado = 2 * Math.PI * this.radio;
  }
}
