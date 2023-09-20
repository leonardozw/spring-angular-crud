import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MangaService } from './manga.service';
import { Demographic, IMangaReq, Status } from './mangaReq';

@Component({
  selector: 'mc-manga-form',
  templateUrl: './manga-form.component.html',
  styleUrls: ['./manga-form.component.css']
})
export class MangaFormComponent {
  originalformData: IMangaReq = {
    title: '',
    author: '',
    releaseDate: '',
    demographic: Demographic.Shounen,
    status: Status.Ongoing,
    description: '',
  };

  formData: IMangaReq = { ...this.originalformData };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private mangaService: MangaService, private _snackBar: MatSnackBar){

  }

  /*openSnackBar(){
    this._snackBar.open('Manga cadastrado com sucesso!', 'Fechar', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }*/

openSnackBar(messageToShow: string, snackBarClass: string): void{
    this._snackBar.open(messageToShow, 'Fechar', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [snackBarClass]
    });
  }

  onSubmit(): void{
    this.formData.releaseDate = this.convertDateToISO(this.formData.releaseDate);
    this.mangaService.postManga(this.formData).subscribe({
      next: () => {
        console.log('Manga cadastrado com sucesso!');
        this.openSnackBar('Manga cadastrado com sucesso!', 'snack-bar-success');
      },
      error: (err) => {
        console.log('Erro', err);
        this.openSnackBar('Falha ao cadastrar manga!', 'snack-bar-fail');
      }
    })
    console.log('Dados a serem enviados:', this.formData);
  }

  private convertDateToISO(date: string): string {
    const dateObject = new Date(date);
    if (!isNaN(dateObject.getTime())) {
      return dateObject.toISOString().split('T')[0];
    }
    return '';
  }
}
