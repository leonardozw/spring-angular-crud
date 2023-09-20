import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMangaReq } from './mangaReq';
import { IMangaRes } from './mangaRes';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private mangaApiUrl = 'http://localhost:8080/api/v1/manga/';

  constructor(private http: HttpClient) { }

  getMangaList(): Observable<IMangaRes[]> {
    return this.http.get<IMangaRes[]>(this.mangaApiUrl + 'list').pipe(catchError(this.handleError));
  }

  postManga(formData: IMangaReq): Observable<any> {
    return this.http.post(this.mangaApiUrl + 'post', formData);
  }

  deleteManga(id: number): Observable<any> {
    return this.http.delete(this.mangaApiUrl + 'delete/' + id);
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
