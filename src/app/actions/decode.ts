import { Action } from '@ngrx/store';
import { Invoice } from '../models/invoice';


export const INVOICES          = 'DECODE_INVOICES';
export const INVOICES_SUCCESS  = 'DECODE_INVOICES_SUCCESS';
export const INVOICES_ERROR    = 'DECODE_INVOICES_ERROR';


/**
 * Decode invoices
 */
export class DecodeInvoices implements Action {
  readonly type = INVOICES;

  constructor(readonly payload: {}) {
  }
}

/**
 * Signal the store that invoices decoded sucessfully
 */
export class DecodeInvoicesSuccess implements Action {
  readonly type = INVOICES_SUCCESS;

  constructor(readonly payload: Invoice[]) {
  }
}

/**
 * Signal the store that an error occurred during invoices decoding
 */
export class DecodeInvoicesError implements Action {
  readonly type = INVOICES_ERROR;

  constructor(readonly payload: Error) {
  }
}


export type Actions =
  DecodeInvoices |
  DecodeInvoicesSuccess |
  DecodeInvoicesError;
