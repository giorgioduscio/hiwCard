import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-generality',
  standalone: true,
  imports: [],
  templateUrl: './generality.component.html',
  styleUrl: './generality.component.css'
})
export class GeneralityComponent implements OnInit {
  @Input() el:any  
  
  ngOnInit(): void {
    console.log("data", this.el.generality);
  }
}
