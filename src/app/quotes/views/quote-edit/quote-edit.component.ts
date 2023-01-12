import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { QuoteService } from '../../shared/quote.service';
import {take} from "rxjs";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";


@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.scss']
})
export class QuoteEditComponent implements OnInit{

  public form!: FormGroup;
  public quoteId!: string;
  public quote!: any;

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute) {

    this.quoteId = this.route.snapshot.params['id'];


    this.form = new FormGroup<any>({
      author: new FormControl<string>(''),
      bookTitle: new FormControl<string>(''),
      quote: new FormControl<string>(''),
      page: new FormControl<number>(0),
      publisher: new FormControl<string>(''),
      publishYear: new FormControl<number>(0, { nonNullable: true }),


      /*author: new FormControl<string>(this.quote.author),
      bookTitle: new FormControl<string>(this.quote.bookTitle),
      quote: new FormControl<string>(this.quote.quote),
      page: new FormControl<number>(this.quote.page),
      publisher: new FormControl<string>(this.quote.publisher),
      publishYear: new FormControl<number>(this.quote.publishYear, { nonNullable: true }),*/
    })


  }

  ngOnInit(): void {
    this.quoteService
      .getQuote(this.quoteId)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.quote = response;
          this.form.setValue({
            author: this.quote.author,
            bookTitle: this.quote.bookTitle,
            quote: this.quote.quote,
            page: this.quote.page,
            publisher: this.quote.publisher,
            publishYear: this.quote.publishYear
          })
        },
        error: (response: HttpErrorResponse) => {
          alert(response.message)
        }
      })
  }

  public onUpdateQuotes(): void {
    this.quoteService
      .updateQuote(this.form.value, this.quote._id, this.quote.creator)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (res) => {
          console.log('PUTBA', res)
          alert('Quote updated successfully!');
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message)
        }
      })
  }

}
