import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { updateCategories } from 'src/app/core/store/actions/categories.actions';
import { State } from 'src/app/core/store/store';
import { IItem, IItemDetail } from 'src/app/shared/models/item';
import { ItemDetailService } from './services/item-detail.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  //item: IItemDetail = {"address": "Bogota", "id":"MLA1133776737","title":" Moto G41 128 Gb  Negro Ónix 4 Gb Ram","price":{"currency":"ARS","amount":42999,"decimals":0},"picture":"http://http2.mlstatic.com/D_711274-MLA49535290493_032022-O.jpg","condition":"Nuevo","freeShipping":true,"soldQuantity":150,"description":"Fotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.\n\nAdemás, el dispositivo cuenta con cámara frontal de 13 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nCapacidad y eficiencia\nCon su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.\n\nDesbloqueo facial y dactilar\nMáxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.\n\nBatería de duración superior\n¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas."}

  item: IItemDetail;
  constructor(private itemDetailService: ItemDetailService, private route: ActivatedRoute, private store: Store<State>) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = await firstValueFrom(this.itemDetailService.getItemDetail(id));
  }

}
