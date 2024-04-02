import { Component, inject, OnInit } from '@angular/core';
import { ApiLocationService } from '../../services/api-location.service';
import {  FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LFilter, LResult } from '../../models/location.model';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {

  protected locationForm


  locationList : LResult[] = []
  checkError ?: boolean

  private _apiLocation = inject(ApiLocationService)

  constructor(){
    this.locationForm = new FormGroup({
      name: new FormControl(''),
      type: new FormControl('',),
      dimension: new FormControl('')
    })
  }



  ngOnInit(): void {
    this.getAllLocations()
    this.locationForm.valueChanges.subscribe({
      next: (dataForm : any ) => {

        if(dataForm.name=='' && dataForm.type =='' && dataForm.dimension =='' ){
          this.getAllLocations()

        }else{
          this.getFilterLocation(dataForm)
        }

      },error:(error) => {
        console.log(error)
      }
    })
  }

  getAllLocations(){
    this._apiLocation.getAllLocation().subscribe({
      next: (data : any) => {
        this.locationList=data.results

      },error:(error) => {
        console.log(error)
      }
    })
  }

  getFilterLocation(data : LFilter ){
    this._apiLocation.getFilterLocation(data).subscribe({
      next: (data : any ) => {
        this.checkError=false
        this.locationList=data.results
      },error: (error) => {
        this.checkError=true
        console.log(error)
      }
    })
  }

}
