import { HttpClient } from '@angular/common/http';
import { inject,  Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ILocation, LFilter, LResult } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class ApiLocationService {

  private _http = inject(HttpClient)
  private urlLocation = 'https://rickandmortyapi.com/api/location'

  constructor() { }

  getAllLocation() : Observable<ILocation[]> {
    return this._http.get<ILocation[]>(`${this.urlLocation}`)
  }

  getLocation(id: number) : Observable<LResult> {
    return this._http.get<LResult>(`${this.urlLocation}/${id}`)
  }

  getFilterLocation(data : LFilter) : Observable<LResult> {
    let {name,type,dimension} = data
    const paramName = name ? `name=${name}&` : ''
    const paramType = type ? `type=${type}&` : ''
    const paramDimension = dimension ? `dimension=${dimension}&` : ''

    let urlParams = `${paramName}${paramType}${paramDimension}`

    return this._http.get<LResult>(`${this.urlLocation}?${urlParams}`)
  }



}
