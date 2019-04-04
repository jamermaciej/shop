import { CardsService } from './services/cards.service';
import { AddCardComponent } from './add-card/add-card.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app.routing.module';
import {PaymentComponent} from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PaymentComponent,
    PageNotFoundComponent,
    PaymentSummaryComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      card: reducer
    })
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
