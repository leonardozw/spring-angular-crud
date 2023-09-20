import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MangaConversionService } from '../manga-conversion.service';
import { IMangaReq } from '../mangaReq';
import { IMangaRes } from '../mangaRes';

@Component({
  selector: 'mc-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMangaRes,
    private mangaConversionService: MangaConversionService
  ) { }

  editableData: IMangaReq = this.mangaConversionService.convertToMangaReq(this.data);

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  onConfirmClick(): void {
    this.dialogRef.close('confirm');
  }

  private convertDateToISO(date: string): string {
    const dateObject = new Date(date);
    if (!isNaN(dateObject.getTime())) {
      return dateObject.toISOString().split('T')[0];
    }
    return '';
  }
}
