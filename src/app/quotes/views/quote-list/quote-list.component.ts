import { Component } from '@angular/core';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { IQuote, QuoteService } from '../../shared/quote.service';
import { JwtService } from '../../../auth/shared/jwt.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent {

  // public list: string[] = ['foo', 'bar', 'fizz', 'Tibó'];
  public searchString: string = '';

  public quotes!: IQuote[];
  public userId!: string;

  constructor(
    private quoteService: QuoteService,
    private jwtService: JwtService,
    private router: Router) {
    this.quoteService
      .getQuotes()
      .pipe(
        take(1)
      )
      .subscribe({
        next: (response: any) => {
          console.log('new quotes:', response);
          this.quotes = response.quotes;
          this.userId = this.jwtService.getUserId();
          console.log('USERID IN LIST', this.userId)
        },
        error: (response: HttpErrorResponse) => {
          console.log(response.message || 'Get quotes has some trouble');
        }
      })
  }

  public onOpenEdit(id: string): void {
    console.log('QUOTE ID click', id)
    this.router.navigate([`/quotes/update/${id}`])
    //this.router.navigate([`/quotes/update`])
  }

  public onDeleteQuote(id: string): void {
    this.quoteService
      .deleteQuote(id)
      .subscribe({
        next: (response: any) => {
          console.log(response.message);
          this.quotes = this.quotes.filter(q => q._id !== id);
        },
        error: (response: HttpErrorResponse) => {
          console.log(response);
        }
      })
  }

}
