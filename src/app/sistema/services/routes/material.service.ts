import { Injectable } from '@angular/core';
import { Material } from '../../interfaces/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/material`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl);
  }
  
  consultarPorId(id: number): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl + "/" + id);
  }

  consultarPorNome(nome: string): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl + "/" + nome);
  }

  consultarPorTipo(tipo: string): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl + "/" + tipo);
  }

  atualizar(id: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(this.apiUrl + '/' + id, formData);
  }

  removerPorId(id: number) {
    return this.http.delete<Material>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Material>(this.apiUrl);
  }
}
