import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IItemDetail } from 'src/app/shared/models/item';
import { ItemDetailService } from './services/item-detail.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: IItemDetail;

  constructor(private itemDetailService: ItemDetailService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = await firstValueFrom(this.itemDetailService.getItemDetail(id));
  }

}
