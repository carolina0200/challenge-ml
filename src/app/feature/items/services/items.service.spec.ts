import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updateCategories } from 'src/app/core/store/actions/categories.actions';
import { ItemsMock } from 'src/app/shared/mocks/items.mock';
import { StoreMock } from 'src/app/shared/mocks/store.mock';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;
  let httpMock: HttpTestingController;
  let store: MockStore;
  const initialState = StoreMock.DEFAULT_MOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemsService, provideMockStore({initialState})]
    });
    service = TestBed.inject(ItemsService);
    store = TestBed.inject(MockStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the items', () => {
    const search = 'Celulares';
    spyOn(store, 'dispatch');
    service.getItems(search).subscribe(items => {
      expect(items.length).toBe(1);
      expect(items).toEqual(ItemsMock.DEFAULT_MOCK);
    });
    const req = httpMock.expectOne(`/api/items?q=${search}`);
    expect(req.request.method).toBe('GET');
    req.flush(ItemsMock.RESPONSE_MOCK);
    expect(store.dispatch).toHaveBeenCalledOnceWith(
      updateCategories({payload: ItemsMock.RESPONSE_MOCK.categories})
    )
  });
});
