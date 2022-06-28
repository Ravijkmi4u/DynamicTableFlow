import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersData } from '../models/model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  action!: string;
  dataContent: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) { 
      this.dataContent = {...data};
      this.action = this.dataContent.action;
    }

  ngOnInit(): void {
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.dataContent });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
