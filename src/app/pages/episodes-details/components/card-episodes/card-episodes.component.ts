import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-episodes',
  standalone: true,
  imports: [],
  templateUrl: './card-episodes.component.html',
  styleUrl: './card-episodes.component.css'
})
export class CardEpisodesComponent {

  @Input() episode ?: any

}
