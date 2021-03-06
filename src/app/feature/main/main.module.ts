import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const  routes: Routes = [
  {
    path:  '',
    component:  MainComponent,
    children: [
      {
        path:  'items',
        loadChildren: () => import('../items/items.module').then(m => m.ItemsModule)
      },
      {
        path:  'items/:id',
        loadChildren: () => import('../item-detail/item-detail.module').then(m => m.ItemDetailModule)
      },
      {
        path:  'error',
        loadChildren: () => import('../../core/error/error.module').then(m => m.ErrorModule)
      }
    ]
  }
];


@NgModule({
  declarations: [MainComponent, BreadcrumbComponent, SearchBarComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class MainModule { }
