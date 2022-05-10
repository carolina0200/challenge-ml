import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemsService } from './services/items.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ItemsComponent }
];

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [ItemsService]
})
export class ItemsModule { }
