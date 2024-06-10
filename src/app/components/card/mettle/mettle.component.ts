import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mettle',
  standalone: true,
  imports: [],
  templateUrl: './mettle.component.html',
  styleUrl: './mettle.component.css'
})
export class MettleComponent {
  @Input() el:any
}
