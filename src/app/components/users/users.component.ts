import { Component } from '@angular/core';
import { FieldsService } from '../../services/fields.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  constructor(private field: FieldsService){
    console.log(this.characters);
  }
  characters =this.field.getCharacters()

}

// <a [routerLink]="['path', ID]"></a>