import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode,EFilter, Result } from '../models/episode.models';


@Injectable({
  providedIn: 'root'
})
export class ApiEpisodeService {

  private _httpEpisode = inject(HttpClient)
  private urlEpisode = 'https://rickandmortyapi.com/api/episode'

  constructor() { }

  getAllEpisode(): Observable<IEpisode[]> {
    return this._httpEpisode.get<IEpisode[]>(`${this.urlEpisode}`)
  }

  getEpisode(id: number) : Observable<Result> {
    return this._httpEpisode.get<Result>(`${this.urlEpisode}/${id}`)
  }

  getFilterEpisode(data : EFilter) : Observable<IEpisode[]> {
    let {name,episode} = data
    let paramName = name ? `name=${name}&` : ''
    let paramEpisode = episode ? `episode=${episode}&` : ''
    let paramsUrl = `${paramName}${paramEpisode}`

    return this._httpEpisode.get<IEpisode[]>(`${this.urlEpisode}?${paramsUrl}`)
  }

  getMultipleEpisodes(ids : number[]) : Observable<Result[]>{
    return this._httpEpisode.get<Result[]>(`${this.urlEpisode}/${ids}`)
  }

}
