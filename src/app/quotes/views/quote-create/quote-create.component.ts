import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { IQuote, QuoteService } from '../../shared/quote.service';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss']
})
export class QuoteCreateComponent {

  public form!: FormGroup;
  public quotes!: IQuote[];

  constructor(private quoteService: QuoteService) {
    this.form = new FormGroup<any>({
      author: new FormControl<string>(''),
      bookTitle: new FormControl<string>(''),
      quote: new FormControl<string>(''),
      page: new FormControl<number>(0),
      publisher: new FormControl<string>(''),
      publishYear: new FormControl<number>(0, { nonNullable: true }),
    })
  }

  public onAddQuotes(): void {
    this.quoteService
      .createQuote(this.form.value)
      .subscribe({
        next: () => {
          alert('New quote successfully added!');
        },
        error: (response: HttpErrorResponse) => {
          alert(response.message)
        }
      })
  }


}
