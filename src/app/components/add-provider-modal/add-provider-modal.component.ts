import { Component, OnInit, Inject, Output } from '@angular/core';
import { Doctor, ModalData } from '../../interfaces/interfaces';
import { DoctorService } from '../../services/doctor.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-provider-modal',
  templateUrl: './add-provider-modal.component.html',
  styleUrls: ['./add-provider-modal.component.css']
})
export class AddProviderModalComponent implements OnInit {
  public doctorControl = new FormControl();
  public doctorId;

  constructor(
    private doctorService: DoctorService,
    public dialogRef: MatDialogRef<AddProviderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
    ) {}


  ngOnInit() {
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnChanges(): void {
    console.log(this.doctorId);

  }
}


