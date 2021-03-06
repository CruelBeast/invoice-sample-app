import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Invoice } from '../models/invoice';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class InvoiceService {
  private INVOICES_API = 'http://localhost:3000/invoices';

  public static extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  public static handleError (error: Response) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    return Observable.throw(new Error(errMsg));
  }

  constructor(private http: Http) {}

  public getInvoices(): Observable<Invoice[]> {
    return this.http.get(this.INVOICES_API)
      .map(InvoiceService.extractData)
      .catch(InvoiceService.handleError);
  }
}
