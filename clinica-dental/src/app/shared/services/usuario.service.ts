import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // import the Observable class from the rxjs library
import { Paciente } from 'src/app/pages/auth/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://18.224.39.140:3000/api/usuarios/';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]|undefined> {
    return this.http.get<Paciente[]>(this.apiUrl+"filter?rol=paciente");
  }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>('http://18.224.39.140:3000/api/usuarios/'+id);
  }
}


