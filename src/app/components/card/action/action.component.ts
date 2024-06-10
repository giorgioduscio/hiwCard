import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent {
  @Input() el:any
}
