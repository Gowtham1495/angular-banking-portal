
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-confirmpopup',
  templateUrl: './confirmpopup.component.html',
  styleUrls: ['./confirmpopup.component.css']
})
export class ConfirmpopupComponent implements OnInit {

  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}
