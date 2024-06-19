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
  }

  characters:any
  ngOnInit(): void {
    this.characters =this.field.getCharacters()
    console.log(this.characters[0].generality[0].field);
  }
}