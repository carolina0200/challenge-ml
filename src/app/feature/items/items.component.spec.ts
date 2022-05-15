import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ActivatedRouteMock } from 'src/app/shared/mocks/activated-route.mock';
import { ItemsMock } from 'src/app/shared/mocks/items.mock';

import { ItemsComponent } from './items.component';
import { ItemsService } from './services/items.service';
import { ItemsServiceStub } from './services/items.service.stub';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let itemsService: ItemsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      providers: [
        { provide: ItemsService, useClass: ItemsServiceStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock }
      ]
    })
    .compileComponents();

    itemsService = TestBed.inject(ItemsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the items', async () => {
    spyOn(itemsService, 'getItems').and.callThrough();
    component.ngOnInit();

    const search = (await firstValueFrom(ActivatedRouteMock.queryParams))['q']
    expect(itemsService.getItems).toHaveBeenCalledOnceWith(search);
    expect(component.items).toEqual(ItemsMock.DEFAULT_MOCK);
  });
});
