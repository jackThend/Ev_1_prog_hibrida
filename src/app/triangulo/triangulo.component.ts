import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Para usar *ngIf
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TrianguloComponent {
  ladoA: number = 0; // Lado A del triángulo
  ladoB: number = 0; // Lado B del triángulo
  ladoC: number = 0; // Lado C del triángulo
  resultado: number | null = null; // Resultado del cálculo del perímetro

  // Método para calcular el perímetro
  calcular() {
    if (this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) {
      this.resultado = this.ladoA + this.ladoB + this.ladoC;
    } else {
      this.resultado = null; // Si los valores no son válidos, no muestra resultado
    }
  }
}
