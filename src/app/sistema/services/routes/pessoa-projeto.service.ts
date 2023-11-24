import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PessoaProjeto } from '../../interfaces/pessoa-projeto';

@Injectable({
  providedIn: 'root'
})
export class PessoaProjetoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/pessoa-projeto`

  constructor(private http: HttpClient) {}

  adicionar(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  
  consultarTodos(): Observable<PessoaProjeto[]> {
    return this.http.get<PessoaProjeto[]>(this.apiUrl);
  }
  
  consultarPorId(id: number): Observable<PessoaProjeto[]> {
    return this.http.get<PessoaProjeto[]>(this.apiUrl + "/" + id);
  }

  atualizar() {
       
  }

  removerPorId(id: number) {
    return this.http.delete<PessoaProjeto>(this.apiUrl + '/' + id);
  }

  removerTodos() {
    return this.http.delete<PessoaProjeto>(this.apiUrl);
  }
}
