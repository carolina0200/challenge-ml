import { IPrice } from "./price"

export interface IItemDetail {
    id: string,
    title: string,
    price: IPrice,
    picture: string,
    address: string,
    condition: string,
    freeShipping: boolean,
    soldQuantity?: number,
    description?: string
}