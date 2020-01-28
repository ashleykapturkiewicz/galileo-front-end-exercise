import { Component } from '@angular/core';
import { Doctor } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'galileo-front-end-exercise';
  public addedDoctors: Doctor[];

  getAdded(addedDoctors){
    this.addedDoctors = addedDoctors;
  }
}
