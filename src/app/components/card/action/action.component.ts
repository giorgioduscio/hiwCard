import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent implements OnInit{
  @Input() el:any

  //todo output ca
  outputCA!:number
  setOutputCA(armorClass:string){  
    switch(armorClass){
      case "light": 
        this.outputCA =12 +this.el.characterScores[1].bonus
        break;

      case "inter": 
        this.outputCA =16
        break;

      case "heavy": 
        this.outputCA =18
        break;

      case "barbarian": 
        this.outputCA =10 +this.el.characterScores[1].bonus +this.el.characterScores[2].bonus
        break;

      case "monk": 
        this.outputCA =10 +this.el.characterScores[1].bonus +this.el.characterScores[4].bonus
        break;

      default:
        this.outputCA =10 +this.el.characterScores[1].bonus
    }  
  }
  // select
  selectValue!:string
  selectChange(e:any){
    this.setOutputCA(e.target.value)
  }

  //optimize punti ferita
  hp!:any

  ngOnInit(): void {
    // todo
    this.selectValue =this.el.armorClass
    this.setOutputCA(this.selectValue)

    //optimize hp =(dado +cost) *livello
    this.hp =(this.el.lifeDice +this.el.characterScores[2].bonus) 
      *this.el.generality[1].field
  }




}
