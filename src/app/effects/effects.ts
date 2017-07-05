import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as decode from '../actions/decode';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { decodeInvoices } from '../decoding/invoice.decoder';

@Injectable()
export class UcsSurveyStateEffects {

  @Effect() decodeInvoice =
    this.actions$
      .ofType(decode.INVOICES)
      .map(action => decodeInvoices.decodeAny(action.payload))
      .map(definition => new decode.DecodeInvoicesSuccess(definition))
      .catch(error => Observable.of(new decode.DecodeInvoicesError(error)));

  constructor(private actions$: Actions, private store$: Store<State>) {
  }
}
