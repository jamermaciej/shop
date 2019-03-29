import { AddCardComponent } from './add-card/add-card.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/cart'
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
      path: 'payment-summary',
      component: PaymentSummaryComponent
    },
    {
      path: 'add-card',
      component: AddCardComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
    exports: [RouterModule]
  })

export class AppRoutingModule {}
