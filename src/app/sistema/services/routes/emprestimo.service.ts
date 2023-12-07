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

  consultarPorDataInicial(dataInicial: Date): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${this.apiUrl}/data/i/${dataInicial}`);
  }

  consultarPorDataFinal(dataFinal: Date): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${this.apiUrl}/data/f/${dataFinal}`);
  }

  atualizar(pessoaId: number, materialId: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(`${this.apiUrl}/${pessoaId}/${materialId}`, formData);
  }

  removerPorId(id: number): Observable<Emprestimo> {
    return this.http.delete<Emprestimo>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<Emprestimo>(this.apiUrl);
  }
}
