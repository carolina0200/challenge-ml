export class Decimals {
    static getDecimals(price) {
        return +price.toString().split('.')[1] || 0;
    };
}