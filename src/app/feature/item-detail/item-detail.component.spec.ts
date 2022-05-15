import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from 'src/app/shared/mocks/activated-route.mock';
import { ItemsMock } from 'src/app/shared/mocks/items.mock';

import { ItemDetailComponent } from './item-detail.component';
import { ItemDetailService } from './services/item-detail.service';
import { ItemDetailServiceStub } from './services/item-detail.service.stub';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;
  let itemDetailService: ItemDetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ],
      providers: [
        { provide: ItemDetailService, useClass: ItemDetailServiceStub }, 
        { provide: ActivatedRoute, useValue: ActivatedRouteMock }
      ]
    })
    .compileComponents();

    itemDetailService = TestBed.inject(ItemDetailService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the item', fakeAsync(() => {
    spyOn(itemDetailService, 'getItemDetail').and.callThrough();
    component.ngOnInit();
    tick();

    expect(itemDetailService.getItemDetail).toHaveBeenCalledOnceWith(ActivatedRouteMock.snapshot.paramMap.get());
    expect(component.item).toEqual(ItemsMock.DEFAULT_MOCK_DESCRIPTION);
  }));
});
