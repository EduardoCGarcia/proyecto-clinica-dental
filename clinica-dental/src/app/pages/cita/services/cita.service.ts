import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // import the Observable class from the rxjs library
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://18.224.39.140:3000/api/cita'; // Ajusta la URL según tus rutas

  constructor(private http: HttpClient) { }

  getCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.apiUrl}/${id}`);
  }

  createCita(factura: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.apiUrl, factura);
  }



  getAppointments(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl);
  }

  getAppointmentsByFecha(fecha: String, id:number|undefined): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/fecha?fecha=${fecha}&id_dentista=${id}`);
  }

  getAppointmentsByDentista(id: number): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/byDentista/${id}`);
  }

  getAppointmentsByRol(rol_consulta: string): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/byRolConsulta/${rol_consulta}`);
  }

  getAppointmentsByPaciente(id: number): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/byPaciente/${id}`);
  }

  updateCita(id: number, cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.apiUrl}/${id}`, cita);
  }

  deleteCita(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
