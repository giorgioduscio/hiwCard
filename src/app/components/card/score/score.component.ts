import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  @Input() characterElem:any
  // CHECK ABILITAà IN TEMPO REALE
  setCheck(e:any, scoreIndex:number, abilityIndex:number){
    this.characterElem.characterScores[scoreIndex].abilities[abilityIndex].proficiency 
    =e.target.checked
  }

  // COMPETENZA NELLE ABILITA'
  abilityBonus(proficiency:boolean, scoreBonus:number){
    let result
    // SE HA COMPETENZA NOMINALE, AGGIUNGI LA COMPETENZA
    if(proficiency) {
      result =this.characterElem.proficiencyBonus +scoreBonus
    }else{
      result =scoreBonus
    }

    if(result>-1) result ="+"+result

    return result
  }
}
