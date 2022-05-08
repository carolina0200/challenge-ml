import { IAuthor } from "./author"
import { IPrice } from "./price"

export interface IItem {
    author?: IAuthor,
    item: IItemDetail
}

export interface IItemDetail {
    id: string,
    title: string,
    price: IPrice,
    picture: string,
    condition: string,
    freeShipping: boolean,
    soldQuantity?: number,
    description?: string
}