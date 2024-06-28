import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [NgFor],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent implements  OnChanges{


  @Input() character:any
  background:any

  ngOnChanges(changes: SimpleChanges): void {
    this.background ={'backgroundImage': `url(${ this.character.imageURL })`}
    // console.log('this.background', this.background);
  }  

}
