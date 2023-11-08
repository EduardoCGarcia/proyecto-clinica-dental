import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Usuario, UsuarioLogIn } from '../interfaces/usuario';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private user = new BehaviorSubject<Usuario | null>(null);
  
  AUTH_SERVER: string = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(authData: UsuarioLogIn): Observable<Usuario | void> {
    return this.http
      .post<Usuario>(`${this.AUTH_SERVER}/login`, authData)
      .pipe(
        map((user: Usuario) => {
          this.user.next(user);
          return user;
        }),
        catchError((error) => this.handleError(error))
      )
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Algo sucedio';
    if (error) {
      errorMessage = `Error: code ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
