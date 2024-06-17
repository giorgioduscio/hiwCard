import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }
  url ="https://corso-angular-23cc6-default-rtdb.europe-west1.firebasedatabase.app/users"

  addUser(body: {}){
    return this.http.post( this.url+".json", body ) 
  }
  getUser(){
    return this.http.get(this.url+".json")
  }
  deleteUser(id: string|number){
    return this.http.delete(`${this.url}/${id}.json`)
  }

  patchUser(id: string|number, body:{}){
    return this.http.patch(`${this.url}/${id}.json`, body)
  }
}
