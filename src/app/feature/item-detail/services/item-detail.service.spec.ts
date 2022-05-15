import { TestBed } from '@angular/core/testing';
import { ItemDetailService } from './item-detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreMock } from 'src/app/shared/mocks/store.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ItemsMock } from 'src/app/shared/mocks/items.mock';
import { updateCategories } from 'src/app/core/store/actions/categories.actions';

describe('ItemDetailService', () => {
  let service: ItemDetailService;
  let httpMock: HttpTestingController;
  let store: MockStore;
  const initialState = StoreMock.DEFAULT_MOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemDetailService, provideMockStore({initialState})]
    });
    service = TestBed.inject(ItemDetailService);
    store = TestBed.inject(MockStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the item', () => {
    const itemId = ItemsMock.DEFAULT_MOCK_DESCRIPTION.id;
    spyOn(store, 'dispatch')
    service.getItemDetail(itemId).subscribe(item => {
      expect(item).toEqual(ItemsMock.DEFAULT_MOCK_DESCRIPTION);
    });
    const req = httpMock.expectOne(`/api/items/${itemId}`);
    expect(req.request.method).toBe('GET');
    req.flush(ItemsMock.RESPONSE_MOCK);
    expect(store.dispatch).toHaveBeenCalledOnceWith(
      updateCategories({payload: ItemsMock.RESPONSE_MOCK.categories})
    )
  });
});
