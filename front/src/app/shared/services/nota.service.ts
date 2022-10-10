import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Nota} from "../../model/nota";
import {take} from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  readonly API = 'api/notas'

  constructor(private http: HttpClient) { }

  getById(id: Number) {
    return this.http.get<Nota>(`${this.API}/${id}`).pipe(take(1));
  }

  getNotas() {
    return this.http.get<Nota[]>(this.API).pipe(take(1));
  }

  create(nota: Nota) {
    return this.http.post<Nota>(this.API, nota).pipe(take(1));
  }

  update(nota: Nota) {
    return this.http.put<Nota>(`${this.API}/${nota.id}`, nota).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
