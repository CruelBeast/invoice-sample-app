import * as fromInvoice from './invoice';



import { ActionReducer, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';



export interface State {
  invoices: fromInvoice.State;
}

export const reducers = {
  invoices: fromInvoice.reducer,
};


export const reducer: ActionReducer<State> = combineReducers(reducers);


// Item selector functions
const getInvoicesState = (state: State) => state.invoices;
export const getInvoices = createSelector(getInvoicesState, fromInvoice.getInvoices);
export const getInvoiceError = createSelector(getInvoicesState, fromInvoice.getInvoiceError);
