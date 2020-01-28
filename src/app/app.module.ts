import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddProviderModalComponent } from './components/add-provider-modal/add-provider-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDialog
} from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AddedDoctorsComponent } from './components/added-doctors/added-doctors.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    AddProviderComponent,
    AddProviderModalComponent,
    AddedDoctorsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AddProviderModalComponent,
  ]
})
export class AppModule { }
