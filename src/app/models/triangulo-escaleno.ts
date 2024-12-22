import { FiguraGeometrica } from './figura-geometrica';

// Clase concreta para un triángulo escaleno
export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(
        private ladoA: number,
        private ladoB: number,
        private ladoC: number
    ) {
        super(); // Llama al constructor de FiguraGeometrica
    }

    // Calcula el perímetro sumando los tres lados
    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}