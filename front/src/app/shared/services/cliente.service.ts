import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";
import {Cliente} from "../../model/cliente";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly API = 'api/clientes'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API).pipe(take(1));
  }

  create(cliente: Cliente) {
    return this.http.post<Cliente>(this.API, cliente).pipe(take(1));
  }

  update(cliente: Cliente) {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
