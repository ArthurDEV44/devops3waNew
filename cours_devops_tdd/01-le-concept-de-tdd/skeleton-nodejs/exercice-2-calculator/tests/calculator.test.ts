import { Add } from '../src/model/add'; // Assurez-vous d'importer toutes les classes nécessaires
import { Divisor } from '../src//model/divisor';
import { Sub } from '../src/model/sub';
import { Number } from '../src/model/number';
import { NumberString } from '../src/model/number-string';

describe('Add', () => {
    it('should add two numbers correctly', () => {
        const add = new Add();
        const result = add.exec(new Number(5), new Number(3));
        expect(result.toString()).toBe('8');
    });
});

describe('Divisor', () => {
    it('should divide two numbers correctly', () => {
        const divisor = new Divisor();
        const result = divisor.exec(new Number(10), new Number(2));
        expect(result.toString()).toBe('5');
    });

    it('should throw an error when dividing by zero', () => {
        const divisor = new Divisor();
        expect(() => divisor.exec(new Number(5), new Number(0))).toThrow('Impossible de diviser par zéro.');
    });
});

describe('Sub', () => {
    it('should subtract two numbers correctly', () => {
        const sub = new Sub();
        const result = sub.exec(new Number(8), new Number(3));
        expect(result.toString()).toBe('5');
    });
});
