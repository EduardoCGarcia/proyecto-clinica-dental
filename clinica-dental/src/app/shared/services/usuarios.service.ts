import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/pages/auth/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://18.224.39.140:3000/api/usuarios/';  // Cambia esto según tu configuración de backend

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}${id}`);
  }

}
