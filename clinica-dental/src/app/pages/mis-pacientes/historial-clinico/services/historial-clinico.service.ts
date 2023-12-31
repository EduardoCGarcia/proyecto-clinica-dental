import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorialClinico } from '../interfaces/historial-clinico';

@Injectable({
  providedIn: 'root'
})
export class HistorialClinicoService {
  private apiUrl = 'http://18.224.39.140:3000/api/historialClinico'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getHistorialesByPaciente(idPaciente: number | undefined): Observable<HistorialClinico[]> {
    const url = `${this.apiUrl}/${idPaciente}`;
    return this.http.get<HistorialClinico[]>(url);
  }

  getHistoriales(): Observable<HistorialClinico[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<HistorialClinico[]>(url);
  }

}
