import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl: string = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiUrl);
  }

}
