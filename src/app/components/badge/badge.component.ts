import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FieldsService } from '../../services/fields.service';
import { GeneralComponent } from './general/general.component';
import { ScoresComponent } from './scores/scores.component';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    RouterLink,

    GeneralComponent,
    ScoresComponent,
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent implements OnInit{
  id!: number;
  character:any

  constructor(private route: ActivatedRoute, private field: FieldsService){}

  ngOnInit(): void {
    // PRENDE L'ID DALLA BARRA DEL BROWSER  
    this.route.paramMap.subscribe((p: ParamMap)=>{
      this.id = +p.get('id')!
      this.character =this.field.characters[this.id]
    })
    console.log("chara", this.character);
  }
}
