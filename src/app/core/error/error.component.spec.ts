import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom } from 'rxjs';
import { StoreMock } from 'src/app/shared/mocks/store.mock';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let store: MockStore;
  const initialState = StoreMock.DEFAULT_MOCK;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the error', async () => {
    spyOn(store, 'select').and.callThrough();

    component.ngOnInit();
    const error = await firstValueFrom(component.error$);

    expect(error).toEqual(StoreMock.DEFAULT_MOCK.error);
  });
});
