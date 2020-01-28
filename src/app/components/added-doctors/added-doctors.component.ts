import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-added-doctors',
  templateUrl: './added-doctors.component.html',
  styleUrls: ['./added-doctors.component.css']
})
export class AddedDoctorsComponent implements OnInit {
  @Input() addedDoctors: Doctor[];
  constructor() { }


  ngOnInit() {

  }

}
