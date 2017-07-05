import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InvoicesComponent } from './views/invoices/invoices.component';
import { InvoiceService } from './services/invoice.service';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UcsSurveyStateEffects } from './effects/effects';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    EffectsModule.run(UcsSurveyStateEffects)
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
