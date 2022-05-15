import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategories);
  }

}
