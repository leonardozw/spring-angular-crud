import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { EditDialogService } from './edit-dialog/edit-dialog.service';
import { MangaService } from './manga.service';
import { IMangaReq } from './mangaReq';
import { IMangaRes } from './mangaRes';

@Component({
  selector: 'mc-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
})
export class MangaComponent implements OnInit, OnDestroy, AfterViewInit{

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageTitle = 'Manga List';
  sub!: Subscription;
  displayedColumns: string[] = ['title', 'author', 'releaseDate', 'demographic', 'status', 'description', 'actions'];
  mangas: IMangaRes[] = [];
  datasource = new MatTableDataSource(this.mangas);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private mangaService: MangaService,
    private confirmationDialogService: ConfirmationDialogService,
    private editDialogService: EditDialogService,
    private _snackBar: MatSnackBar
  ){}

  openSnackBar(messageToShow: string, snackBarClass: string): void {
    this._snackBar.open(messageToShow, 'Fechar', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [snackBarClass]
    });
  }

  deleteManga(id: number): void{
    this.mangaService.deleteManga(id).subscribe({
      next: () => {
        console.log('Manga deletado com sucesso!');
        this.openSnackBar('Manga deletado com sucesso!', 'snack-bar-deleted-success');
        this.ngOnInit();
      },
      error: (err) => {
        this.openSnackBar('Erro ao remover manga!', 'snack-bar-deleted-fail');
        console.log(err)
      }
    });
  }

  updateManga(manga: IMangaReq, id: any): void{
    this.mangaService.updateManga(manga, id).subscribe({
      next: () => {
        console.log('Manga atualizado com sucesso!');
        this.openSnackBar('Manga atualizado com sucesso!', 'snack-bar-updated-success');
        this.ngOnInit();
      },
      error: (err) => {
        this.openSnackBar('Erro ao atualizar o manga!', 'snack-bar-updated-fail');
        console.log(err)
      }
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

  showEditDialog(manga: IMangaRes): void{
    const dialogRef = this.editDialogService.openEditDialog(manga);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm'){
        this.updateManga(dialogRef.componentInstance.editableData, manga.id);
      }
    });
  }

  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.sub = this.mangaService.getMangaList().subscribe({
      next: mangaList => {
        this.datasource.data = mangaList;
      },
      error: err => console.log(err)
    });
  }

  ngAfterViewInit(): void {
    this.datasource = new MatTableDataSource<IMangaRes>(this.mangas);
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
