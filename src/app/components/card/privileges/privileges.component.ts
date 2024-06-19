import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privileges',
  standalone: true,
  imports: [],
  templateUrl: './privileges.component.html',
  styleUrl: './privileges.component.css'
})
export class PrivilegesComponent {
  @Input() characterElem:any
}
