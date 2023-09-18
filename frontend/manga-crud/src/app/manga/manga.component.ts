import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMangaRes } from './manga';
import { MangaService } from './manga.service';

@Component({
  selector: 'mc-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit, OnDestroy{
  pageTitle = 'Manga List';
  sub!: Subscription;

  constructor(private mangaService: MangaService){}

  mangas: IMangaRes[] = [];

  ngOnInit(): void {
    this.sub = this.mangaService.getMangaList().subscribe({
      next: mangaList => {
        this.mangas = mangaList;
      },
      error: err => console.log(err)
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
