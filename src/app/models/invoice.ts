export interface Invoice {
  id: string;
  internalNumber: string;
  proFormaInvoiceDate: string;
  finalInvoiceDate: string;
  provider: Provider;
  activitiesValue: number;
  grossTotal: number;
  invoiceStatus: string;
  paymentStatus: string;
}

export interface Provider {
  name: string;
}
