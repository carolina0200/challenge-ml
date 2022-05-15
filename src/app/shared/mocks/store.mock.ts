import { State } from "src/app/core/store/store";

export class StoreMock {
    static DEFAULT_MOCK: State = {
        categories: ['Celulares y telefonos', 'Smartphones'],
        error: undefined
    }
}