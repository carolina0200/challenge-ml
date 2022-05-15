import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ItemsMock } from "src/app/shared/mocks/items.mock";
import { IItemDetail } from "src/app/shared/models/item";

@Injectable()
export class ItemsServiceStub {
    getItems(input: string): Observable<IItemDetail[]> {
        return of(ItemsMock.DEFAULT_MOCK)
    }
}