import { Injectable } from '@angular/core';
import { Demographic, IMangaReq, Status } from './mangaReq';
import { IMangaRes } from './mangaRes';

@Injectable({
  providedIn: 'root'
})
export class MangaConversionService {

  constructor() { }

  private convertDateToISO(date: string): string {
    const dateObject = new Date(date);
    if (!isNaN(dateObject.getTime())) {
      return dateObject.toISOString().split('T')[0];
    }
    return '';
  }

  convertToMangaReq(mangaRes: IMangaRes): IMangaReq{

    // mapping enum demographic
    let demographic: Demographic;
    switch (mangaRes.demographic) {
      case 'SEINEN':
        demographic = Demographic.Seinen;
        break;
      case 'SHOUJO':
        demographic = Demographic.Shoujo;
        break;
      case 'SHOUNEN':
        demographic = Demographic.Shounen;
        break;
      case 'JOSEI':
        demographic = Demographic.Josei;
        break;
      case 'KODOMO':
        demographic = Demographic.Kodomo;
        break;
      default:
        demographic = Demographic.Shounen;
    }

    //mapping enum status
    let status: Status;
    switch (mangaRes.status) {
      case 'ONGOING':
        status = Status.Ongoing;
        break;
      case 'COMPLETED':
        status = Status.Completed;
        break;
      case 'CANCELLED':
        status = Status.Cancelled;
        break;
      case 'HIATUS':
        status = Status.Hiatus;
        break;
      default:
        status = Status.Ongoing;
    }

    const mangaReq: IMangaReq = {
      title: mangaRes.title,
      author: mangaRes.author,
      releaseDate: this.convertDateToISO(mangaRes.releaseDate),
      demographic: demographic,
      status: status,
      description: mangaRes.description,
    }

    return mangaReq;
  }
}
