import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom } from 'rxjs';
import { selectCategories } from 'src/app/core/store/selectors/categories.selectors';
import { StoreMock } from 'src/app/shared/mocks/store.mock';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let store: MockStore;
  const initialState = StoreMock.DEFAULT_MOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      providers: [ provideMockStore({initialState}) ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bring categories from store', async () => {
    spyOn(store, 'select').and.callThrough();
    
    component.ngOnInit();

    expect(store.select).toHaveBeenCalledOnceWith(selectCategories);
    expect(await firstValueFrom(component.categories$)).toEqual(StoreMock.DEFAULT_MOCK.categories);
  });
});
