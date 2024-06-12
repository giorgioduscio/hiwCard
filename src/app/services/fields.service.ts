import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }
  getCharacters(){ return this.characters }

  characters =[
    // UGUE
    {
      // GENERALITA'
      id: 0,
      name: "Maestro Ugue",
      imageURL: "https://i.pinimg.com/736x/c0/7d/ae/c07dae84043f8f3528089322f3e75b06.jpg",
      transportCapacity(){ 
        //punteggio *7.5
        let result =((this.characterScores[0].bonus *2) +10) *7.5
        return result
      }, 
      moral: "Neutrale",
      age: 100,
      height: 1,
      weight: 50,
      
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
          bonus: 0,
          proficiency: true,
          abilities: [
            // {title: "Acrobazia", proficiency: true},
          ]
        },
        {
          title: "Intelligenza",
          bonus: 2,
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
          bonus: 3,
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
          bonus: 2,
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

      // CARATTERE
      mettle:["Estroverso", "Gentile", "Logorroico"],

      // PRIVILEGI
      privileges: [
        "Atleta", "Furtivo", "Ragnoide"
      ]
    },

    // JACK SPARROW
    {
      // GENERALITA'
      id: 1,
      name: "Jack Sparrow",
      imageURL: "https://i.pinimg.com/736x/5a/06/89/5a068970bd13910105e3a0150e11e668.jpg",
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
          bonus: 2,
          proficiency: true,
          abilities: [
            {title: "Atletica", proficiency: true},
          ]
        },
        {
          title: "Destrezza",
          bonus: 3,
          proficiency: false,
          abilities: [
            {title: "Acrobazia", proficiency: true},
            {title: "Furtività", proficiency: false},
            {title: "Manualità", proficiency: true},
          ]
        },
        {
          title: "Costituzione",
          bonus: 1,
          proficiency: true,
          abilities: [
            // {title: "Acrobazia", proficiency: true},
          ]
        },
        {
          title: "Intelligenza",
          bonus: 0,
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
          bonus: 2,
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
          bonus: -1,
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

      // CARATTERE
      mettle:["Estroverso", "Gentile", "Logorroico"],

      // PRIVILEGI
      privileges: [
        "Atleta", "Furtivo", "Ragnoide"
      ]
    },

    // GANDALF
    {
      // GENERALITA'
      id: 2,
      name: "Gandalf il barbaro",
      imageURL: "https://i.etsystatic.com/42140335/r/il/f82c05/4744018168/il_fullxfull.4744018168_659d.jpg",
      transportCapacity(){ 
        //punteggio *7.5
        let result =((this.characterScores[0].bonus *2) +10) *7.5
        return result
      }, 
      moral: "Buono",
      age: 23,
      height: 1.96,
      weight: 90,
      
      // PUNTEGGI CARATTERISTICA
      proficiencyBonus: 2,
      characterScores:[
        {
          title: "Forza",
          bonus: 3,
          proficiency: true,
          abilities: [
            {title: "Atletica", proficiency: true},
          ]
        },
        {
          title: "Destrezza",
          bonus: 2,
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
          bonus: -1,
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
          bonus: 0,
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
          bonus: 1,
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

      // CARATTERE
      mettle:["Estroverso", "Gentile", "Logorroico"],

      // PRIVILEGI
      privileges: [
        "Atleta", "Furtivo", "Ragnoide"
      ]
    },
  ]
}
