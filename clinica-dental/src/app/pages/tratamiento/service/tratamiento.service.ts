import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../interfaces/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  private apiUrl = 'http://localhost:3000/api/tratamientos';  // Cambia esto según tu configuración de backend

  constructor(private http: HttpClient) { }

  getTratamiento(id: number): Observable<Tratamiento> {
    return this.http.get<Tratamiento>(`${this.apiUrl}/${id}`);
  }

  getTratamientos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.apiUrl);
  }
}
