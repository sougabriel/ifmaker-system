import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../../interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {  
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/pessoa`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  consultarPorNome(nome: string): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/n/${nome}`);
  }
  
  consultarPorEmail(email: string): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/e/${email}`);
  }
  
  consultarPorPublico(publico: string): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/p/${publico}`);
  }
  
  consultarPorId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  atualizar(id: number, formData: FormData): Observable<FormData> {
       return this.http.put<FormData>(this.apiUrl + '/' + id, formData);
  }

  removerPorId(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Pessoa>(this.apiUrl);
  }
}
