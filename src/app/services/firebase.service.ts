import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }
  url ="https://corso-angular-23cc6-default-rtdb.europe-west1.firebasedatabase.app/users"

  add(body: {}){
    return this.http.post( this.url+".json", body ) 
  }
  get(){
    return this.http.get(this.url)
  }
}
