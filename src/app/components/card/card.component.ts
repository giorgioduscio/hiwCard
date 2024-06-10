import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../services/fields.service';
import { CardGeneralityComponent } from '../card-generality/card-generality.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardGeneralityComponent,
  ],
  providers:[ FieldsService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {
  showScore =true
  styleButton ={
    transform: this.showScore? `rotate(270deg)` :`rotate(180deg)`
  }
   

  constructor(private field: FieldsService){
    console.log(this.el);

  }
  characters =this.field.getCharacters()
  el =this.characters[0]
  
}
