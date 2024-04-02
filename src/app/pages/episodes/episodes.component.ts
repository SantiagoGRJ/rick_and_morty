import { EFilter } from './../../models/episode.models';
import { FormBuilder, FormGroup, MaxLengthValidator, MaxValidator, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiEpisodeService } from './../../services/api-episode.service';
import { Component, effect, inject, OnInit } from '@angular/core';
import { Result } from '../../models/episode.models';
import { Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent implements OnInit {

  formFilterEpisode: FormGroup
  episodeList: Result[] = []
  checkError ?: boolean

  private _apiEpisose = inject(ApiEpisodeService)

  constructor(private form: FormBuilder) {
    this.formFilterEpisode = this.form.group({
      name: ['',],
      code: ['',]
    })
  }

  ngOnInit(): void {
    this.getAllEpisodes()



     this.formFilterEpisode.valueChanges.subscribe({
      next: (params: any) => {
        if(params['name']=='' && params['code'] ==''){
          this.getAllEpisodes()
        }else{
          this.checkError=false
          this.getFilterEpisodes(params)
        }

      },error: (error) => {
        console.log(error)
      }
    })



  }

  getAllEpisodes(){
    this._apiEpisose.getAllEpisode().subscribe({
      next: (data: any) => {
        console.log(data.results)
       return this.episodeList = data.results
      }, error: (error) => {
        console.log(error)
      }
    })
  }

  getFilterEpisodes(params: EFilter){
    this._apiEpisose.getFilterEpisode(params).subscribe({
      next:(data : any) =>{

        //console.log("Data filter: ",data)
       return this.episodeList=data.results
      },error: (error) => {
        this.checkError = true
        console.log(error)
      }
    })
  }





}
