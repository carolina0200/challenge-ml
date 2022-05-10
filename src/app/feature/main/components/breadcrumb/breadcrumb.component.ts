import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { response } from 'express';
import { map, Observable, take } from 'rxjs';
import { selectCategories } from 'src/app/core/store/selectors/categories.selectors';
import { State } from 'src/app/core/store/store';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  categories$: Observable<string[]>

  constructor(private store: Store<State>) { }

  ngOnInit(): any {
    this.categories$ = this.store.select(selectCategories);
  }

}
