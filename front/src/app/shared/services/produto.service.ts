import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../../model/produto";
import {take} from "rxjs";
import {Cliente} from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  readonly API = 'api/produtos'

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get<Produto[]>(this.API).pipe(take(1));
  }

  create(produto: Produto) {
    return this.http.post<Cliente>(this.API, produto).pipe(take(1));
  }

  update(produto: Produto) {
    return this.http.put<Cliente>(`${this.API}/${produto.id}`, produto).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
