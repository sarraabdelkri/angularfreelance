import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:5000/user'; // URL de base de votre backend
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) {}

  register(user) {
    // Utilisez la variable 'url' pour construire l'URL complète du point de terminaison d'inscription
    const registerUrl = `${this.url}/signup`;
    return this.http.post<any>(registerUrl, user);
  }

  login(user) {
    // Utilisez la variable 'url' pour construire l'URL complète du point de terminaison de connexion
    const loginUrl = `${this.url}/login`;
    return this.http.post<any>(loginUrl, user);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
