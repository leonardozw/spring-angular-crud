import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { MangaService } from './manga.service';
import { IMangaRes } from './mangaRes';

@Component({
  selector: 'mc-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
})
export class MangaComponent implements OnInit, OnDestroy{

  pageTitle = 'Manga List';
  sub!: Subscription;
  displayedColumns: string[] = ['title', 'author', 'releaseDate', 'demographic', 'status', 'description', 'actions'];
  mangas: IMangaRes[] = [];

  constructor(
    private mangaService: MangaService,
    private confirmationDialogService: ConfirmationDialogService
    ){}

  deleteManga(id: number): void{
    this.mangaService.deleteManga(id).subscribe({
      next: () => {
        console.log('Manga deletado com sucesso!');
        this.ngOnInit();
      },
      error: (err) => console.log(err)
    });
  }

  showConfirmationDialog(id: number): void{
    const dialogRef = this.confirmationDialogService.openConfirmDialog();
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm'){
        this.deleteManga(id);
      }
    });
  }

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
