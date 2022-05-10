import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { IItemDetail } from 'src/app/shared/models/item';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  //items: IItemDetail[] =[{"id":"MLA1111903059","title":" Moto G60s 128 Gb  Aqua 6 Gb Ram","price":{"currency":"ARS","amount":52999,"decimals":0},"picture":"http://http2.mlstatic.com/D_966438-MLA48112811958_112021-I.jpg","condition":"Nuevo","freeShipping":true,"address":"Buenos Aires"},{"id":"MLA1113731432","title":"Motorola Edge 20 Lite 128 Gb  Verde 6 Gb Ram","price":{"currency":"ARS","amount":69999,"decimals":0},"picture":"http://http2.mlstatic.com/D_861433-MLA48233896240_112021-I.jpg","condition":"Nuevo","freeShipping":true,"address":"Buenos Aires"},{"id":"MLA923362790","title":"Samsung Galaxy S20 Fe 128 Gb  Cloud Navy 6 Gb Ram","price":{"currency":"ARS","amount":86999,"decimals":0},"picture":"http://http2.mlstatic.com/D_995741-MLA47861036467_102021-I.jpg","condition":"Nuevo","freeShipping":true,"address":"Buenos Aires"},{"id":"MLA1133776737","title":" Moto G41 128 Gb  Negro Ónix 4 Gb Ram","price":{"currency":"ARS","amount":42999,"decimals":0},"picture":"http://http2.mlstatic.com/D_711274-MLA49535290493_032022-I.jpg","condition":"Nuevo","freeShipping":true,"address":"Buenos Aires"}]
  items: IItemDetail[]
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const search = (await firstValueFrom(this.route.queryParams))['q'];
    this.items = await firstValueFrom(this.itemsService.getItemDetail(search))
  }

}
