import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from './manga.service';
import { IMangaRes } from './mangaRes';

@Component({
  selector: 'mc-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit{

  pageTitle = 'Manga Detail';
  manga: IMangaRes | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mangaService: MangaService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.getManga(id);
    }
  }

  getManga(id: any): void{
    this.mangaService.getManga(id).subscribe({
      next: manga => this.manga = manga,
      error: err => this.errorMessage = err
    });
  }
}
