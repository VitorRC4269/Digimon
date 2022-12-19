import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Digimon } from '../models/digimon.model';

const baseUrl = 'http://localhost:8080/api/digimon';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private http: HttpClient) { }


  findByName(name: any): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(`${baseUrl}/name/${name}`);
  }

  findByLevel(level: any): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(`${baseUrl}/level/${level}`);
  }

  
}
