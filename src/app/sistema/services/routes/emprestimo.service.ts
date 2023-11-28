import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emprestimo } from '../../interfaces/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/emprestimo`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(this.apiUrl);
  }
  
  consultarPorId(id: number): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(this.apiUrl + "/" + id);
  }

  atualizar(id: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(this.apiUrl + '/' + id, formData);
  }

  removerPorId(id: number) {
    return this.http.delete<Emprestimo>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Emprestimo>(this.apiUrl);
  }
}
