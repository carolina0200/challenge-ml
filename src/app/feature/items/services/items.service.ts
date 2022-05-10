import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { updateCategories } from 'src/app/core/store/actions/categories.actions';
import { State } from 'src/app/core/store/store';
import { IItemDetail } from 'src/app/shared/models/item';
import { ISearch } from 'src/app/shared/models/search';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient, private store: Store<State>) { }

  getItemDetail(input: string): Observable<IItemDetail[]> {
    const queryParams = new HttpParams().append("q",input);
    return this.http.get<ISearch>(`/api/items`, {params: queryParams}).pipe(
      tap(response => this.store.dispatch(updateCategories({payload: response.categories}))),
      map(response => response.items)
    );
  }

}
