import { IAuthor } from "./author";
import { IItemDetail } from "./item";

export interface ISearch {
    author: IAuthor,
    categories: string[],
    items: IItemDetail[]
}