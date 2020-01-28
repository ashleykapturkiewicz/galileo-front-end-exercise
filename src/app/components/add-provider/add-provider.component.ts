import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Doctor, ModalData } from 'src/app/interfaces/interfaces';
import { MatDialog } from '@angular/material';
import { AddProviderModalComponent } from '../add-provider-modal/add-provider-modal.component';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  public doctor_id: ModalData;
  @Output() addedDoctors = new EventEmitter<Doctor[]>();
  addedDoctorArray: Doctor[] = []
  public doctors: Doctor[];

  constructor(public dialog: MatDialog,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  openModal() {
    const dialogRef = this.dialog.open(AddProviderModalComponent, {
      data: { doctor_id: this.doctor_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.doctors.forEach(doctor => {
          if (doctor.doctor_id === result) {
            console.log(doctor);
            this.addedDoctorArray.push(doctor);
          }

        });
      }
      this.addedDoctors.emit(this.addedDoctorArray);
    });
  }

}


