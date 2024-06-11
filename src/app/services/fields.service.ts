import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }
  getCharacters(){ return this.characters }

  characters =[
    {
      // GENERALITA'
      id: 0,
      name: "Piercarlo",
      transportCapacity(){ 
        //punteggio *7.5
        let result =((this.characterScores[0].bonus *2) +10) *7.5
        return result
      }, 
      moral: "Neutrale",
      age: 23,
      height: 1.80,
      weight: 70,
      
      // PUNTEGGI CARATTERISTICA
      proficiencyBonus: 2,
      characterScores:[
        {
          title: "Forza",
          bonus: -1,
          proficiency: true,
          abilities: [
            {title: "Atletica", proficiency: true},
          ]
        },
        {
          title: "Destrezza",
          bonus: 1,
          proficiency: false,
          abilities: [
            {title: "Acrobazia", proficiency: true},
            {title: "Furtività", proficiency: false},
            {title: "Manualità", proficiency: true},
          ]
        },
        {
          title: "Costituzione",
          bonus: 2,
          proficiency: true,
          abilities: [
            // {title: "Acrobazia", proficiency: true},
          ]
        },
        {
          title: "Intelligenza",
          bonus: 3,
          proficiency: false,
          abilities: [
            {title: "Arcano", proficiency: true},
            {title: "Natura", proficiency: false},
            {title: "Storia", proficiency: true},
            {title: "Investigare", proficiency: false},
            {title: "Religione", proficiency: true},
          ]
        },
        {
          title: "Saggezza",
          bonus: 4,
          proficiency: true,
          abilities: [
            {title: "Interazione animale", proficiency: true},
            {title: "Intuizione", proficiency: false},
            {title: "percezione", proficiency: true},
            {title: "Medicina", proficiency: false},
            {title: "Sopravvivenza", proficiency: true},
          ]
        },
        {
          title: "Carisma",
          bonus: 5,
          proficiency: false,
          abilities: [
            {title: "Intimidire", proficiency: true},
            {title: "Intrattenere", proficiency: false},
            {title: "Persuasione", proficiency: true},
            {title: "Inganno", proficiency: false},
          ]
        },
      ],

      // COMPETENZE
      proficiencys:["Armi da guerra", "Armature leggere", "Carro da traino"],

      // AZIONE
      speed: 5,
      armorClass(){ return 10 +this.characterScores[1].bonus },
      lifeDice: 10,
      hitPoints: 30,

      // ARMI E ATTACCHI
      weapons: ["Stocco", "Roncone", "Palla di fuoco"],

      // EQUIPAGGIAMENTO
      equipment:["Bastone", "Borsa da erborista", "Abito comune"],

      
      privileges: [
        "Atleta",
      ]
    },
  ]
}
