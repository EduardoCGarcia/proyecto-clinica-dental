import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import { Usuario, UsuarioLogIn, UsuarioSignUp } from '../interfaces/usuario';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<Usuario | null>(null);

  AUTH_SERVER: string = 'http://localhost:3000/api/auth';

  private loggedIn = new BehaviorSubject<boolean>(false);
  private isAdmin = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.updateUserState();
  }

  private getUserFromLocalStorage(): Usuario | null {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  private updateUserState(): void {
    const user = this.getUserFromLocalStorage();
    if (user) {
      this.loggedIn.next(true);
      this.user.next(user);
      if (user.user.rol.toUpperCase() ==='ADMIN') {
        this.isAdmin.next(true);
      }
    }
    
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get isLoggedAdmin(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  get user$(): Observable<Usuario | null> {
    return this.user.asObservable();
  }

  login(authData: UsuarioLogIn): Observable<Usuario | void> {
    return this.http
      .post<Usuario>(`${this.AUTH_SERVER}/login`, authData)
      .pipe(
        map((user: Usuario) => {
          this.user.next(user);
          this.saveLocalStorage(user)
          this.user.next(user)
          this.loggedIn.next(true);

          if (user.user.rol.toUpperCase() === 'ADMIN') {
            this.isAdmin.next(true);
          }
          return user;
        }),
        catchError((error) => this.handleError(error))
      )
  }

  signup(authData: UsuarioSignUp): Observable<Usuario | void> {
    return this.http
      .post<Usuario>(`${this.AUTH_SERVER}/signup`, authData)
      .pipe(
        map((user: Usuario) => {
          this.user.next(user);
          return user;
        }),
        catchError((error) => this.handleError(error))
      )
  }
  
  getRole(): Observable<string | null> {
    const user = this.getUserFromLocalStorage();
    return of(user ? user.user.rol.toUpperCase() : null);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.user.next(null);
    this.loggedIn.next(false);
    this.isAdmin.next(false);
  }

  private saveLocalStorage(user: Usuario): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Algo sucedio';
    if (error) {
      errorMessage = `${error.status} Usuario y/o contraseña incorrectos`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
