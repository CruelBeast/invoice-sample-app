import { array, Decoder, number, object, string } from 'type-safe-json-decoder';
import { Invoice, Provider } from '../models/invoice';


const decodeProvider: Decoder<Provider> =
  object(
    ['name', string()],
    name => ({name: name})
  );

export const decodeInvoice: Decoder<Invoice> =
  object(
    ['id', string()],
    ['internalNumber', string()],
    ['proFormaInvoiceDate', string()],
    ['finalInvoiceDate', string()],
    ['provider', decodeProvider],
    ['activitiesValue', number()],
    ['grossTotal', number()],
    ['invoiceStatus', string()],
    ['paymentStatus', string()],
    (id, internalNumber, proFormaInvoiceDate, finalInvoiceDate, provider, activitiesValue, grossTotal, invoiceStatus, paymentStatus) =>
      ({id, internalNumber, proFormaInvoiceDate, finalInvoiceDate, provider, activitiesValue, grossTotal, invoiceStatus, paymentStatus})
  );

export const decodeInvoices: Decoder<Invoice[]> =
  array(decodeInvoice);
