import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent implements OnInit {
  constructor(private firebase: FirebaseService){}
  formSwitch =false 

  //OPTIMIZE TEMPLATE FORM
  @ViewChild("templateForm") templateForm!: NgForm
  templateSubmit(templateForm: NgForm){
    console.log('templateForm', this.templateForm);
  }


  // TODO REACTIVE FORM
  reactiveForm!: FormGroup;
  ngOnInit(): void {
    this.reactiveForm =new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', 
        [ Validators.required, Validators.email ]
      ),
    })
  }
  
  reactiveSubmit(){
    console.log('reactiveForm', this.reactiveForm);

    this.firebase.add({ 
      username: this.reactiveForm.value.username, 
      email: this.reactiveForm.value.email 
    })
    .subscribe(data=>{ console.log(data); })
  }
}
