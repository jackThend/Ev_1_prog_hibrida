import { FiguraGeometrica } from './figura-geometrica';

// Clase concreta para un círculo
export class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super(); // Llama al constructor de FiguraGeometrica
    }

    // Calcula el perímetro usando la fórmula: 2 * π * radio
    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}
