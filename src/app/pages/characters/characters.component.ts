import { ApiCharactersService } from './../../services/api-characters.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Character, CFilter } from '../../models/characters.models';
import { Params, RouterLink } from '@angular/router';
import { generate, UnsubscriptionError } from 'rxjs';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink

  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  formMultiple: FormGroup
  // checkMultiple ?: boolean
  checkFilter?: boolean
  charactersList: Character[] = []
  name?: string
  checkData ?: boolean
  checkHidden ?: boolean




  private _apiService = inject(ApiCharactersService)

  constructor(private form: FormBuilder) {
    this.formMultiple = this.form.group({
      //  check: [false,Validators.requiredTrue],
      checked: [false, Validators.requiredTrue],
      name: ['',],
      status: [''],
      species: [''],
      gender: ['']
    })
  }

  ngOnInit(): void {
    this.getData()
    this.checkData=true
    this.formMultiple.valueChanges.subscribe({
      next: (value: any) => {
        // this.checkMultiple=value['check']
        this.checkFilter = value['checked']

        if(!this.checkFilter){
          this.checkHidden=true
        }
        if(value['species']== ''  && value['name'] == '' && value['status'] == '' && value['gender'] == '') {
          this.getData()
        }else{
          this.getFilterData(value)
        }
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  getData() {
    this._apiService.getAllCharacters().subscribe({
      next : (params: any) => {
       return this.charactersList = params.results
      },
      error : (error : any) =>{
       return console.log(error)
      }
    })
  }

  getFilterData(value: CFilter){
    this._apiService.getFilterCharacters(value).subscribe({
      next: (params: any) => {

        console.log(params.results)
      return  this.charactersList = params.results, this.checkData=true

      },
      error: (error: any) => {

        console.log(this.checkData)
       return this.checkData=false
        console.log(error)
        console.log(error.status)
      },
      complete : () => {}
    })
  }







}
