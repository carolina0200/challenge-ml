import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { MainComponent } from './main.component';
import { StoreMock } from 'src/app/shared/mocks/store.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let store: MockStore;
  const initialState = StoreMock.DEFAULT_MOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, BreadcrumbComponent, SearchBarComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    store = TestBed.inject(MockStore)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
