import { Component, Input, Output } from '@angular/core';
import { Character } from '../../../../models/characters.models';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {

  @Input() character ?: Character
  

}
