import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proficiency',
  standalone: true,
  imports: [],
  templateUrl: './proficiency.component.html',
  styleUrl: './proficiency.component.css'
})
export class ProficiencyComponent {
  @Input() characterElem:any
}
