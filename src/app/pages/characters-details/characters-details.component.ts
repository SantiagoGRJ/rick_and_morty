import { Component, inject, numberAttribute, OnInit } from '@angular/core';
import { ApiCharactersService } from '../../services/api-characters.service';
import { RouterLink,Router, ActivatedRoute } from '@angular/router';
import { Character } from '../../models/characters.models';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { ApiEpisodeService } from '../../services/api-episode.service';

@Component({
  selector: 'app-characters-details',
  standalone: true,
  imports: [
    RouterLink,
    CardCharacterComponent
  ],
  templateUrl: './characters-details.component.html',
  styleUrl: './characters-details.component.css'
})
export class CharactersDetailsComponent implements OnInit{

  character ?: Character
  id ?: number
  episodesList = []
  linksEpisodes : any[] = []

  ids ?: any
  idsE ?: any
  private _apiService = inject(ApiCharactersService)
  private _apiEpisode = inject(ApiEpisodeService)
  private _router = inject(Router)
  private _activeRouter = inject(ActivatedRoute)

  ngOnInit(): void {
    this._activeRouter.params.subscribe({
      next:(params : any) => {
        this.id =params['id']

        this.getCharacter(Number(this.id))

      },error : (error) => {
        console.log(error)
      }
    })

  }

  getCharacter(id:number){
    this._apiService.getCharacter(id).subscribe({
      next:(data : Character)=> {
        
        this.character=data

      },error : (error) => {
        console.log(error)
      }
    })
  }

  getEpisodes(ids : number[]){
    this._apiEpisode.getMultipleEpisodes(ids).subscribe({
      next: data => {
        console.log(data)

      },error: (error) => {
        console.log(error)
      }
    })
  }


}
