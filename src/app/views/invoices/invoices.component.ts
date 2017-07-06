import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { getInvoiceError, State } from '../../reducers/index';
import * as fromDecode from '../../actions/decode';
import { getInvoices } from '../../reducers/index';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit, OnDestroy {

  invoices$: Observable<Invoice[]>;
  invoiceError$: Observable<Error>;
  apiError: Error;
  private invoiceService: InvoiceService;
  private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private store$: Store<State>, invoiceService: InvoiceService) {
    this.invoiceService = invoiceService;
    this.getInvoices();
    this.invoices$ = store$.select(getInvoices);
    this.invoiceError$ = store$.select(getInvoiceError);
  }

  getInvoices() {
    this.invoiceService.getInvoices().takeUntil(this.ngUnsubscribe).subscribe(
      invoices  => {
        console.log(invoices);
        this.loadInvoices(invoices);
      },
      error => this.apiError = {...error, message: 'INVOICE API RESPONSE: ' + error.message}
    );
  }
  loadInvoices(invoices: Invoice[]) {
    this.store$.dispatch(new fromDecode.DecodeInvoices(invoices));
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
