import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ItemsMock } from "src/app/shared/mocks/items.mock";
import { IItemDetail } from "src/app/shared/models/item";

@Injectable()
export class ItemDetailServiceStub {
    getItemDetail(id): Observable<IItemDetail> {
        return of(ItemsMock.DEFAULT_MOCK_DESCRIPTION);
    }
}