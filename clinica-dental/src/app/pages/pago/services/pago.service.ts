import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../interfaces/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:3000/api/pago/byFactura';  // Cambia esto según tu configuración de backend

  constructor(private http: HttpClient) { }

  addPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(this.apiUrl, pago);
  }

  getPago(id: number): Observable<Pago> {
    return this.http.get<Pago>(`${this.apiUrl}/${id}`);
  }

  getPagosByFactura(idFactura: number): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/${idFactura}`);
  }
}
