import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailService } from './services/item-detail.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ItemDetailComponent }
];

@NgModule({
  declarations: [ItemDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [ItemDetailService]
})
export class ItemDetailModule { }
