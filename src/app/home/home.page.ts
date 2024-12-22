import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Para manejar [(ngModel)]
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule, // Registra CommonModule para *ngIf
    TrianguloComponent,
    CirculoComponent
  ],
})
export class HomePage {
  figuraSeleccionada: string | null = null; // Variable enlazada al selector

  constructor() {}
}