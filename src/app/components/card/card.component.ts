import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../services/fields.service';

import { CardGeneralityComponent } from './card-generality/card-generality.component';
import { ScoreComponent } from './score/score.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { ActionComponent } from './action/action.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MettleComponent } from './mettle/mettle.component';
import { PrivilegesComponent } from './privileges/privileges.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardGeneralityComponent,
    ScoreComponent,
    ProficiencyComponent,

    ActionComponent,
    WeaponsComponent,
    EquipmentComponent,

    MettleComponent,
    PrivilegesComponent,
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
