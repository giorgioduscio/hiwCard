import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent {
  @Input() character:any
  
  //todo output ca
  outputCA!:number
  setOutputCA(armorClass:string){  
    switch(armorClass){
      case "light": 
        this.outputCA =12 +this.character.characterScores[1].bonus
        break;

      case "inter": 
        this.outputCA =16
        break;

      case "heavy": 
        this.outputCA =18
        break;

      case "barbarian": 
        this.outputCA =10 +this.character.characterScores[1].bonus +this.character.characterScores[2].bonus
        break;

      case "monk": 
        this.outputCA =10 +this.character.characterScores[1].bonus +this.character.characterScores[4].bonus
        break;

      default:
        this.outputCA =10 +this.character.characterScores[1].bonus
    }  
  }
  // select
  selectValue!:string
  selectChange(e:any){
    this.setOutputCA(e.target.value)
  }
  ngOnInit(): void {
    // todo
    this.selectValue =this.character.armorClass
    this.setOutputCA(this.selectValue)
  }

  // optimize punti ferita
  damage =0
  setDamage(event:any){
    this.damage =event.target.value
  }
  hp(){  
    let 
      lifeDice =this.character.lifeDice,
      constitution =this.character.characterScores[2].bonus,
      level =this.character.generality[1].field
    return (lifeDice +constitution) *level
  }
}
