import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuoteListComponent } from './views/quote-list/quote-list.component';
import { QuoteCreateComponent } from './views/quote-create/quote-create.component';
import { QuoteEditComponent } from './views/quote-edit/quote-edit.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: QuoteListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: QuoteCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id',
    component: QuoteEditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
