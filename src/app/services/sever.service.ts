import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Shop {
  id: number;
  denominazione: string;
  indirizzo: string;
  citta: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeverService {
  constructor(private http: HttpClient) {}

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  private url = 'https://server-node-igna.vercel.app/shops';

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url);
  }
  
  getShopsByCity(city: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url+"/"+city);
  }

  addShop(shop: Shop){
    
  }

  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
  
}
