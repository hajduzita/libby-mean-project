import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuoteListComponent } from './views/quote-list/quote-list.component';
import { QuoteCreateComponent } from './views/quote-create/quote-create.component';
import { QuoteEditComponent } from './views/quote-edit/quote-edit.component';
import { FilterPipe } from "../filter.pipe";
import { NavComponent } from '../shared/nav/nav.component';



@NgModule({
  declarations: [
    QuoteListComponent,
    QuoteCreateComponent,
    QuoteEditComponent,
    FilterPipe,
    NavComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class QuotesModule { }
