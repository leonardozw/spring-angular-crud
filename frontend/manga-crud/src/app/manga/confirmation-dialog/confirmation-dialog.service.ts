import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(): MatDialogRef<ConfirmationDialogComponent>{
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '390px',
    });
  }
}
