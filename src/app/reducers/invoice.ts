import { Invoice } from '../models/invoice';
import * as decode from '../actions/decode';


export interface State {
  invoices: Invoice[];
  error: Error | null;
}

export const initialState: State = {
  invoices: [],
  error: null
};

export function reducer(state = initialState, action: decode.Actions): State {

  switch (action.type) {

    case decode.INVOICES_SUCCESS:
      return {...state, invoices: action.payload};

    case decode.INVOICES_ERROR:
      console.log(action.payload);
      return {...state, error: action.payload};


    default:
      return state;
  }
}

export const getInvoices = (state: State) => state.invoices;
export const getInvoiceError = (state: State) => state.error;
