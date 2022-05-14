import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IItemDetail } from 'src/app/shared/models/item';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  
  items: IItemDetail[];

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      const search = params['q'];
      this.items = await firstValueFrom(this.itemsService.getItemDetail(search))
    });
  }

}
