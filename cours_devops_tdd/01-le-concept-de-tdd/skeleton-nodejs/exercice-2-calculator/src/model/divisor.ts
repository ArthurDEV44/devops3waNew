import { Calculable } from './calculable';
import { Number } from './number';
import { NumberString } from './number-string';

export class Divisor implements Calculable {
    exec(a: Number, b: Number): NumberString {
        if (b.getNumber() === 0) {
            throw new Error("Impossible de diviser par zéro.");
        }

        return new NumberString(a.getNumber() / b.getNumber());
    }
}
