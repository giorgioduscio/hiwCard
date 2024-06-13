import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule  
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  formSwitch =false 

  //OPTIMIZE TEMPLATE FORM
  @ViewChild("templateForm") templateForm!: NgForm
  templateSubmit(templateForm: NgForm){
    console.log('templateForm', this.templateForm.value);
  }

  // TODO REACTIVE FORM
  reactiveForm!: FormGroup;
  ngOnInit(): void {
    this.reactiveForm =new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', 
        [Validators.required, Validators.email]),

    })
  }

  reactiveSubmit(){
    console.log('reactiveForm', this.reactiveForm);
    
  }
}
