import { IAuthor } from "../models/author";
import { IItemDetail } from "../models/item";
import { ISearch } from "../models/search";

export class ItemsMock {
    static DEFAULT_MOCK_DESCRIPTION: IItemDetail = {
        id: "MLA1133776737",
        title: "Moto G41 128 Gb  Negro Ónix 4 Gb Ram",
        price: {
            currency:"ARS",
            amount: 42999,
            decimals:0
        },
        picture: "http://http2.mlstatic.com/D_711274-MLA49535290493_032022-O.jpg",
        condition: "Nuevo",
        freeShipping: true,
        soldQuantity: 150,
        description: "Fotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo.",
        address: "Bogota"
    }

    static DEFAULT_MOCK = [
        ItemsMock.DEFAULT_MOCK_DESCRIPTION
    ];

    static AUTHOR_MOCK: IAuthor = {
        name: 'Carolina',
        lastname: 'Giraldo'
    }

    static RESPONSE_MOCK: ISearch = {
        author: ItemsMock.AUTHOR_MOCK,
        categories: ['Celulares', 'Smartphones'],
        items: ItemsMock.DEFAULT_MOCK
    }

   
}