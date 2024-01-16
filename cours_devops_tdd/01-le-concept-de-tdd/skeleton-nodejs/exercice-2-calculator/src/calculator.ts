class Calculator {
    private precision: number;

    constructor(precision: number) {
        this.precision = precision;
    }

    public add(a: number, b: number): number {
        return this.round(a + b);
    }

    public division(a: number, b: number): number {
        if (b === 0.0) {
            throw new Error("Impossible de diviser par zéro");
        }

        return this.round(a / b);
    }

    public getPrecision(): number {
        return this.precision;
    }

    public setPrecision(precision: number): this {
        this.precision = precision;

        return this;
    }

    private round(value: number): number {
        const multiplier = Math.pow(10, this.precision);
        return Math.round(value * multiplier) / multiplier;
    }
}
