import { Component, inject, OnInit } from '@angular/core';
import { CardLocationComponent } from './components/card-location/card-location.component';
import { ApiLocationService } from '../../services/api-location.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LResult } from '../../models/location.model';

@Component({
  selector: 'app-locations-details',
  standalone: true,
  imports: [
    CardLocationComponent
  ],
  templateUrl: './locations-details.component.html',
  styleUrl: './locations-details.component.css'
})
export class LocationsDetailsComponent implements OnInit{

  id ?: number
  locationList : any

  private _http=inject(ApiLocationService)
  private _routerActived = inject(ActivatedRoute)

  ngOnInit(): void {
      this._routerActived.params.subscribe({
        next: (params:Params) => {
          this.id=params['id']

          this.getLocation(Number(this.id))

        },error:(error)=>{
          console.log(error)
        }
      })
  }

  getLocation(id : number ){
    this._http.getLocation(id).subscribe({
      next:(location: LResult) => {
        this.locationList=location

      },error:(error) =>{
        console.log(error)
      }
    })
  }

}
