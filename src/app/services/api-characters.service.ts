import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Character, ICharacters } from '../models/characters.models';
import { CFilter } from '../models/characters.models';

@Injectable({
  providedIn: 'root'
})
export class ApiCharactersService {

  constructor() { }

  private _http = inject(HttpClient)
  private urlApi = 'https://rickandmortyapi.com/api/character'

  getAllCharacters() : Observable<ICharacters[]> {
    return this._http.get<ICharacters[]>(this.urlApi)
  }
  getCharacter(id : number) : Observable<Character>{
    return this._http.get<Character>(`${this.urlApi}/${id}`)
  }

  /* getMultipleCharacters(data : number[] | number ) : Observable<Character[] | Character > {
    return this._http.get<Character[] | Character >(`${this.urlApi}/${data}`)
  } */

  getFilterCharacters( data : CFilter  ) : Observable<ICharacters[] > {
    let {name,status,species,gender} = data

    const paramName = name ? `name=${name}&` : ''
    const paramStatus = status ? `status=${status}&` : ''
    const paramSpecies = species ? `species=${species}&` :  ''
    const paramGender = gender ? `gender=${gender}&` :  ''
    const paramsFilter = `${paramName}${paramStatus}${paramSpecies}${paramGender}`



    return this._http.get<ICharacters[]>(`${this.urlApi}/?${paramsFilter}`)
  }

}
