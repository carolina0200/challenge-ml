import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { updateCategories } from 'src/app/core/store/actions/categories.actions';
import { State } from 'src/app/core/store/store';
import { IItemDetail } from 'src/app/shared/models/item';
import { ISearch } from 'src/app/shared/models/search';

@Injectable()
export class ItemDetailService {

  constructor(private http: HttpClient, private store: Store<State>) { }

  getItemDetail(id): Observable<IItemDetail> {
    return this.http.get<ISearch>(`/api/items/${id}`).pipe(
      tap(response => this.store.dispatch(updateCategories({payload: response.categories}))),
      map(response => response.items[0])
    );
  }

}
