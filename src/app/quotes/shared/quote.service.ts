import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import { environment as ENV } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface IQuoteResponse extends IQuote {
  message: string;
}

export interface IQuote {
  _id: string;
  author: string;
  bookTitle: string;
  quote: string;
  page: number;
  publisher: string;
  publishYear: number;
  __v: any;
  creator: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  public getQuotes(): Observable<IQuote> {
    return this.http.get<IQuote>(`${ENV.api}/quotes`);
  }

  public getQuote(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${ENV.api}/quotes/${id}`);
  }

  public createQuote(createQuote: IQuote): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      `${ENV.api}/quotes`,
      createQuote,
      { observe: 'response' }
    );
  }

  public updateQuote(data: any, id: string, creator: string): Observable<HttpResponse<any>> {
    return this.http.put<any>(
      `${ENV.api}/quotes/${id}`,
      //`${ENV.api}/quotes`,
      { data, id, creator },
      { observe: 'response' }
    );
  }

  public deleteQuote(id: string): Observable<string> {
    return this.http.delete<string>(`${ENV.api}/quotes/${id}`);
  }
}
