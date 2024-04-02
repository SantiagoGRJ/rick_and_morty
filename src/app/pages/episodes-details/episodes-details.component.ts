import { Component, inject, OnInit } from '@angular/core';
import { CardEpisodesComponent } from './components/card-episodes/card-episodes.component';
import { ApiEpisodeService } from '../../services/api-episode.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Result } from '../../models/episode.models';

@Component({
  selector: 'app-episodes-details',
  standalone: true,
  imports: [
    CardEpisodesComponent
  ],
  templateUrl: './episodes-details.component.html',
  styleUrl: './episodes-details.component.css'
})
export class EpisodesDetailsComponent implements OnInit{

  id ?: number
  episode ?: any

  private _api = inject(ApiEpisodeService)
  private _routeActived= inject(ActivatedRoute)

  ngOnInit(): void {
    this.getParam()
  }

  getParam(){
    this._routeActived.params.subscribe({
      next: (params: Params) => {
        this.id=params['id']

        this.getEpisode(Number(this.id))

      },error:(error) => {
        console.log(error)
      }
    })
  }

  getEpisode(id: number){
    this._api.getEpisode(id).subscribe({
      next: (episode : Result)  => {
        this.episode=episode

      },error:(error) => {
        console.log(error)
      }
    })
  }



}
