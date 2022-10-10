import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Nota} from "../../model/nota";
import {take} from "rxjs";
import {ItensNota} from "../../model/itens-nota";

@Injectable({
  providedIn: 'root'
})
export class ItensNotaService {

  readonly API = 'api/itensNota'

  constructor(private http: HttpClient) {}

  create(itensNota: ItensNota) {
    return this.http.post<ItensNota>(this.API, itensNota).pipe(take(1));
  }

  update(itensNota: ItensNota) {
    return this.http.put<ItensNota>(`${this.API}/${itensNota.id}`, itensNota).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
