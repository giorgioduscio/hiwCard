import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }
  getCharacters(){ return this.characters }

  characters =[
    
    {//TODO OOGWAY
      // GENERALITA'
      id: 0,
      generality: [
        {title: "Nome", field: "Maestro Oogway"},
        {title: "Livello", field: 3},
        {title: "Morale", field: "Collettivista Buono"},
        {title: "Età", field: 100},
        {title: "Altezza", field: 1},
        {title: "Peso", field: 50},
      ],
      imageURL: "https://www.vibrazionipositive.com/imgb/478/maestro-oogway-insegna.webp",
      transportCapacity(){ 
        //punteggio *7.5
        let result =((this.characterScores[0].bonus *2) +10) *7.5
        return result
      }, 
      
      // PUNTEGGI CARATTERISTICA
      proficiencyBonus: 2,
      characterScores:[
        {
          title: "Forza",
          bonus: -1,
          abilities: [
            {title: "Atletica", proficiency: false},
          ]
        },
        {
          title: "Destrezza",
          bonus: 1,
          abilities: [
            {title: "Acrobazia", proficiency: false},
            {title: "Furtività", proficiency: false},
            {title: "Manualità", proficiency: true},
          ]
        },
        {
          title: "Costituzione",
          bonus: 0,
          abilities: [
            {title: "Resilienza", proficiency: false},
          ]
        },
        {
          title: "Intelligenza",
          bonus: 2,
          
          abilities: [
            {title: "Arcano", proficiency: false},
            {title: "Natura", proficiency: false},
            {title: "Storia", proficiency: false},
            {title: "Investigare", proficiency: false},
            {title: "Religione", proficiency: false},
          ]
        },
        {
          title: "Saggezza",
          bonus: 3,
          
          abilities: [
            {title: "Interazione animale", proficiency: false},
            {title: "Intuizione", proficiency: false},
            {title: "Percezione", proficiency: true},
            {title: "Medicina", proficiency: true},
            {title: "Sopravvivenza", proficiency: false},
          ]
        },
        {
          title: "Carisma",
          bonus: 2,
          
          abilities: [
            {title: "Intimidire", proficiency: false},
            {title: "Intrattenere", proficiency: false},
            {title: "Persuasione", proficiency: true},
            {title: "Inganno", proficiency: false},
          ]
        },
      ],

      // COMPETENZE
      proficiencys:["Armi semplici", "Carro da traino"],

      // AZIONE
      speed: 5,
      armorClass: "monk",
      lifeDice: 6,
      

      // ARMI E ATTACCHI
      weapons: ["Bastone", "Tempesta di petali"],

      // EQUIPAGGIAMENTO
      equipment:["Bastone", "Borsa da erborista", "Abito comune"],

      // CARATTERE
      mettle:["Introverso", "Gentile", "Saggio"],

      // PRIVILEGI
      privileges: [ "Osservatore", "Incantesimi" ]
    },

    
    {//TODO JACK SPARROW
      // GENERALITA'
      id: 1,
      generality: [
        {title: "Nome", field: "Jack Sparrow"},
        {title: "Livello", field: 3},
        {title: "Morale", field: "Individualista Neutrale"},
        {title: "Età", field: 23},
        {title: "Altezza", field: 1.80},
        {title: "Peso", field: 70},
      ],
      imageURL: "https://movieplayer.net-cdn.it/t/images/2022/10/20/johnny-depp-jack-sparrow_jpg_1600x900_crop_q85.jpg",
      transportCapacity(){ 
        //punteggio *7.5
        let result =((this.characterScores[0].bonus *2) +10) *7.5
        return result
      }, 
      
      // PUNTEGGI CARATTERISTICA
      proficiencyBonus: 2,
      characterScores:[
        {
          title: "Forza",
          bonus: 0,
          
          abilities: [
            {title: "Atletica", proficiency: false},
          ]
        },
        {
          title: "Destrezza",
          bonus: 3,
          
          abilities: [
            {title: "Acrobazia", proficiency: true},
            {title: "Furtività", proficiency: true},
            {title: "Manualità", proficiency: false},
          ]
        },
        {
          title: "Costituzione",
          bonus: 2,
          
          abilities: [
            {title: "Resilienza", proficiency: false},
          ]
        },
        {
          title: "Intelligenza",
          bonus: -1,
          
          abilities: [
            {title: "Arcano", proficiency: false},
            {title: "Natura", proficiency: false},
            {title: "Storia", proficiency: false},
            {title: "Investigare", proficiency: false},
            {title: "Religione", proficiency: false},
          ]
        },
        {
          title: "Saggezza",
          bonus: 1,
          
          abilities: [
            {title: "Interazione animale", proficiency: false},
            {title: "Intuizione", proficiency: false},
            {title: "Percezione", proficiency: false},
            {title: "Medicina", proficiency: false},
            {title: "Sopravvivenza", proficiency: false},
          ]
        },
        {
          title: "Carisma",
          bonus: 2,
          
          abilities: [
            {title: "Intimidire", proficiency: false},
            {title: "Intrattenere", proficiency: false},
            {title: "Persuasione", proficiency: true},
            {title: "Inganno", proficiency: true},
          ]
        },
      ],

      // COMPETENZE
      proficiencys:["Armi da guerra", "Armature leggere", "Carro da traino"],

      // AZIONE
      speed: 5,
      armorClass: "light",
      lifeDice: 8,
      

      // ARMI E ATTACCHI
      weapons: ["Stocco", "Roncone", "Palla di fuoco"],

      // EQUIPAGGIAMENTO
      equipment:["Bastone", "Borsa da erborista", "Abito comune"],

      // CARATTERE
      mettle:["Estroverso", "Egocentrico", "Logorroico"],

      // PRIVILEGI
      privileges: [
        "Atleta", "Furtivo", "Ragnoide"
      ]
    },

    
    {//TODO GANDALF
      // GENERALITA'
      id: 2,
      generality: [
        {title: "Nome", field: "Gandalf il barbaro"},
        {title: "Livello", field: 3},
        {title: "Morale", field: "Buono"},
        {title: "Età", field: 81},
        {title: "Altezza", field: 2.1},
        {title: "Peso", field: 90},
      ],
      imageURL: "https://i.etsystatic.com/42140335/r/il/f82c05/4744018168/il_fullxfull.4744018168_659d.jpg",
      transportCapacity(){ 
        //punteggio *7.5
        let result =((this.characterScores[0].bonus *2) +10) *7.5
        return result
      }, 
      
      // PUNTEGGI CARATTERISTICA
      proficiencyBonus: 2,
      characterScores:[
        {
          title: "Forza",
          bonus: 3,
          
          abilities: [
            {title: "Atletica", proficiency: true},
          ]
        },
        {
          title: "Destrezza",
          bonus: 2,
          
          abilities: [
            {title: "Acrobazia", proficiency: true},
            {title: "Furtività", proficiency: false},
            {title: "Manualità", proficiency: false},
          ]
        },
        {
          title: "Costituzione",
          bonus: 2,
          
          abilities: [
            {title: "Resilienza", proficiency: false},
          ]
        },
        {
          title: "Intelligenza",
          bonus: -1,
          
          abilities: [
            {title: "Arcano", proficiency: false},
            {title: "Natura", proficiency: false},
            {title: "Storia", proficiency: false},
            {title: "Investigare", proficiency: false},
            {title: "Religione", proficiency: false},
          ]
        },
        {
          title: "Saggezza",
          bonus: 1,
          
          abilities: [
            {title: "Interazione animale", proficiency: false},
            {title: "Intuizione", proficiency: true},
            {title: "Percezione", proficiency: false},
            {title: "Medicina", proficiency: false},
            {title: "Sopravvivenza", proficiency: true},
          ]
        },
        {
          title: "Carisma",
          bonus: 0,
          
          abilities: [
            {title: "Intimidire", proficiency: false},
            {title: "Intrattenere", proficiency: false},
            {title: "Persuasione", proficiency: false},
            {title: "Inganno", proficiency: false},
          ]
        },
      ],

      // COMPETENZE
      proficiencys:["Armi da guerra", "Armature leggere", "Carro da traino"],

      // AZIONE
      speed: 5,
      armorClass: "barbarian",
      lifeDice: 12,
      

      // ARMI E ATTACCHI
      weapons: ["Stocco", "Roncone", "Palla di fuoco"],

      // EQUIPAGGIAMENTO
      equipment:["Bastone", "Borsa da erborista", "Abito comune"],

      // CARATTERE
      mettle:["Autorevole", "Gentile", "Saccente"],

      // PRIVILEGI
      privileges: [
        "Pugile", "Lottatore da taverna"
      ]
    },
  ]
}
