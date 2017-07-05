import { Routes } from '@angular/router';

import { InvoicesComponent } from './views/invoices/invoices.component';

export const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent
  },
  // {
  //   path: 'book/find',
  //   component: FindBookPageComponent
  // },
  // {
  //   path: 'book/:id',
  //   canActivate: [ BookExistsGuard ],
  //   component: ViewBookPageComponent
  // },
  // {
  //   path: '**',
  //   component: NotFoundPageComponent
  // }
];
