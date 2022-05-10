import { Conditions } from "./conditions";
import { Decimals } from "./decimal";

export class ItemDetailFormat {

    static getItemWithDescription(product, description) {
        return {
            ...this.getItem(product),
            soldQuantity: product.sold_quantity,
            description,
        };
    };

    static getItem(product) {
        return {
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: Math.trunc(product.price),
                decimals: Decimals.getDecimals(product.price),
            },
            picture: product.thumbnail,
            condition: Conditions[product.condition],
            freeShipping: product.shipping.free_shipping,
            address: product.address?.state_name,
        };
    };
}