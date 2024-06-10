import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-generality',
  standalone: true,
  imports: [],
  templateUrl: './card-generality.component.html',
  styleUrl: './card-generality.component.css'
})
export class CardGeneralityComponent {
  @Input() el:any

  
}
