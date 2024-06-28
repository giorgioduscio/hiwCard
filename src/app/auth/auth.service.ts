import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static authenticated: any;
  constructor() { }
  isLogged =true
  authenticated():boolean {
    return this.isLogged
  }
}
