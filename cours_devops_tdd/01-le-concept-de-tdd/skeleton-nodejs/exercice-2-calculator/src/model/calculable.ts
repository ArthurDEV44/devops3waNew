import { Number } from './number';
import { NumberString } from './number-string';

export interface Calculable {
    exec(a: Number, b: Number): NumberString;
}
