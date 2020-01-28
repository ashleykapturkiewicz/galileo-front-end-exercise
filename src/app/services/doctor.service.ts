import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../interfaces/interfaces'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorUrl:string = 'https://testapi.io/api/akirayoglu/0/reference/getDoctors';


  constructor(private http:HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.doctorUrl}`);

  }
}
