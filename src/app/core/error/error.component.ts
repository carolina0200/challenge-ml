import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getError } from '../store/selectors/error.selectors';
import { IError, State } from '../store/store';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  error$: Observable<IError>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.error$ = this.store.select(getError);
  }

}
