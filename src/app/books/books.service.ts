import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./Book";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

    private baseApi = environment.apiUri;

  constructor(private httpClient: HttpClient) { }

    public getAllBooks(page: number, size: number): Observable<Book[]>{
      return this.httpClient.get<Book[]>(`${this.baseApi}/book?page=${page}&size=${size}`);
    }

    public deleteBook(bookId: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.baseApi}/book/${bookId}`);
    }

    public editBook(book:Book,bookId: number): Observable<Book>{
        return this.httpClient.put<Book>(`${this.baseApi}/book/${bookId}`, book);
    }


}


interface GetResponseProduct{

    content: Book[],

    totalPages: number
    totalElements: number
    size: number
    number: number
}
