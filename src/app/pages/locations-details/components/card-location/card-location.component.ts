import { Component, Input } from '@angular/core';
import { LResult } from '../../../../models/location.model';

@Component({
  selector: 'app-card-location',
  standalone: true,
  imports: [],
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.css'
})
export class CardLocationComponent {

  @Input() location ?: LResult

}
