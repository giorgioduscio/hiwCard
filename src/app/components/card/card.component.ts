import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  providers:[ FieldsService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  showAside =true

  constructor(private field: FieldsService){
    console.log(this.el);

  }
  characters =this.field.getCharacters()
  el =this.characters[0]

  
}
