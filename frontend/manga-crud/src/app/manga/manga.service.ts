import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMangaRes } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private mangaApilist = 'http://localhost:8080/api/v1/manga/list';

  constructor(private http: HttpClient) { }

  getMangaList(): Observable<IMangaRes[]> {
    return this.http.get<IMangaRes[]>(this.mangaApilist).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
}

}
