import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acesso } from '../../interfaces/acesso';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/acesso`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Acesso[]> {
    return this.http.get<Acesso[]>(this.apiUrl);
  }

  consultarTodosOrdPorData(): Observable<Acesso[]> {
    return this.http.get<Acesso[]>(`${this.apiUrl}/ord/data/`);
  }
  
  consultarPorId(id: number): Observable<Acesso[]> {
    return this.http.get<Acesso[]>(this.apiUrl + "/" + id);
  }

  consultarPorData(data: Date): Observable<Acesso[]> {
    return this.http.get<Acesso[]>(`${this.apiUrl}/${data}`);
  }

  consultarPorPessoa(pessoaId: number): Observable<Acesso[]> {
    return this.http.get<Acesso[]>(`${this.apiUrl}/p/${pessoaId}`);
  }

  atualizar(id: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(this.apiUrl + '/' + id, formData);
  }

  removerPorId(id: number): Observable<Acesso> {
    return this.http.delete<Acesso>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Acesso>(this.apiUrl);
  }
}
