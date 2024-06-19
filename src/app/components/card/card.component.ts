import { Component, OnDestroy, OnInit } from '@angular/core';
import { FieldsService } from '../../services/fields.service';

import { GeneralityComponent } from './generality/generality.component';
import { ScoreComponent } from './score/score.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { ActionComponent } from './action/action.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MettleComponent } from './mettle/mettle.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    GeneralityComponent,

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


export class CardComponent implements OnInit{
  id: number =0;
  private sub: any;
  el:any

  constructor(private route: ActivatedRoute, private field: FieldsService){  }
  characters =this.field.getCharacters()

  ngOnInit(): void {
    this.sub =this.route.params.subscribe(params =>{
      this.id = +params['ID'];
    })
    this.el =this.characters[this.id]
  }
}
