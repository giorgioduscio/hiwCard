import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent implements OnInit {
  constructor(private firebase: FirebaseService){}
  formSwitch =false 
  getData: any

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
/* 
    // GET
    this.firebase.getUser().subscribe((data:any)=>{ 
      this.getData =Object.keys(data).map(key=> {
        return data[key]['id'] =key
      })
      console.log('fromDatabase', data) 
      console.log('converter', this.getData) 
    })
*/
  }
  
  // ADD
  reactiveSubmit(){
    console.log('reactiveForm', this.reactiveForm);

    this.firebase.addUser({ 
      username: this.reactiveForm.value.username, 
      email: this.reactiveForm.value.email 
    })
    .subscribe(data=>{ console.log(data) })
  }
  
/*
  // DELETE
  clickDelete(id:any){
    this.firebase.deleteUser(id)
    .subscribe(data=>{ console.log(data) })
  }

  // PATCH
  clickPatch(id:any){
    this.firebase.patchUser(id, {email: "programmaDelC@zzo.com"})
    .subscribe(data=>{ console.log(data) })
  }
*/
}
