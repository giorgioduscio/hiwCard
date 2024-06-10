import { Component, OnInit } from '@angular/core';
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

export class UsersComponent implements OnInit{
  constructor(private field: FieldsService){
    console.log(this.characters);
  }

  characters:any
  ngOnInit(): void {
    this.characters =this.field.getCharacters()
  }
}