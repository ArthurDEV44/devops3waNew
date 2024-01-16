export class Number {
    constructor(private number: number) {}

    getNumber(): number {
        return this.number;
    }

    setNumber(number: number): this {
        this.number = number;
        return this;
    }
}
