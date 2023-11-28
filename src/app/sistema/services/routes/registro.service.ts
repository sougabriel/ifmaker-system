import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registro } from '../../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/registro`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl);
  }
  
  consultarPorId(id: number): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl + "/" + id);
  }

  atualizar(id: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(this.apiUrl + '/' + id, formData);
  }

  removerPorId(id: number) {
    return this.http.delete<Registro>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Registro>(this.apiUrl);
  }
}
