import { Invoice } from '../models/invoice';
import * as decode from '../actions/decode';


export interface State {
  invoices: Invoice[];
}

export const initialState: State = {
  invoices: []
};

export function reducer(state = initialState, action: decode.Actions): State {

  switch (action.type) {

    case decode.INVOICES_SUCCESS:
      return {...state, invoices: action.payload};

    case decode.INVOICES_ERROR:
      console.log(action.payload);
      return state;


    default:
      return state;
  }
}

export const getInvoices = (state: State) => state.invoices;
