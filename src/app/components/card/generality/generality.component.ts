import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-generality',
  standalone: true,
  imports: [],
  templateUrl: './generality.component.html',
  styleUrl: './generality.component.css'
})
export class GeneralityComponent {
  @Input() el:any  

  
}
