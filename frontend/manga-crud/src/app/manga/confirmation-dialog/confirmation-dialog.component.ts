import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mc-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  onConfirmClick(): void {
    this.dialogRef.close('confirm');
  }
}
