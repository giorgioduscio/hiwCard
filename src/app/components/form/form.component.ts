import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent implements OnInit {
  constructor(private firebase: FirebaseService){}
  formSwitch =false 
  users: any

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
 
    // MOSTRA
    this.firebase.getUser()
    .subscribe((data:any)=>{ 
      // CONVERTE L'OGGETTO IN ARRAY
      this.users =Object.keys(data).map(key=> {
        // AGGIUNGE L'ID
        data[key]['id'] =key
        return data[key]
      })
      console.log('database', this.users) 
    })
  }
  
  // AGGIUNGI
  reactiveSubmit(){
    console.log('reactiveForm', this.reactiveForm);

    this.firebase.addUser({ 
      username: this.reactiveForm.value.username, 
      email: this.reactiveForm.value.email 
    })
    .subscribe(data=>{ console.log("aggiunto", data) })
  }

  // ELIMINA
  clickDelete(id:any){
    this.firebase.deleteUser(id)
    .subscribe(data=>{ console.log("elimina", id) })
  }
  
  // MODIFICA
  changePatch(id:string, event:any){
    let {name, value} =event.target
    console.log('evento', event.target);
    
    this.firebase.patchUser(id, {[name]: value})
    .subscribe(data=>{ console.log(data) })
  }
}
