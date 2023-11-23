import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projeto } from '../../interfaces/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/projeto`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl);
  }
  
  consultarPorId(id: number): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl + "/" + id);
  }

  atualizar() {
       
  }

  removerPorId(id: number) {
    return this.http.delete<Projeto>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Projeto>(this.apiUrl);
  }
}
