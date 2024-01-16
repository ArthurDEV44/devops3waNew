import { Calculable } from './calculable';
import { Number } from './number';
import { NumberString } from './number-string';

export class Add implements Calculable {
    exec(a: Number, b: Number): NumberString {
        return new NumberString(a.getNumber() + b.getNumber());
    }
}
