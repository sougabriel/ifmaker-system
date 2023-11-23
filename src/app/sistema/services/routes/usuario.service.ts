import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/usuario`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  
  consultarPorId(id: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl + "/" + id);
  }

  entrar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}/login`, formData);
  }

  removerPorId(id: number) {
    return this.http.delete<Usuario>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Usuario>(this.apiUrl);
  }
}
