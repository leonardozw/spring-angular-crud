import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IMangaRes } from '../mangaRes';
import { EditDialogComponent } from './edit-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EditDialogService {

  constructor(private dialog: MatDialog) { }

  openEditDialog(manga: IMangaRes): MatDialogRef<EditDialogComponent>{
    return this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: manga
    });
  }
}
