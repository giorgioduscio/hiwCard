import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css'
})
export class ScoresComponent {
  @Input() character:any

  abilityBonus(bonus:number, proficiency:boolean){
    let result =proficiency? bonus+ this.character.proficiencyBonus :bonus
    return result>=0? '+'+result :result
  }

  // AL CHECK, AGGIUNGE IL BC ALL'ABILITA
  checkChange(event:any, a:number, b:number){
    // console.log('data', a, b, event.target.checked);
    this.character.characterScores[a].abilities[b].proficiency =event.target.checked
  }
}
