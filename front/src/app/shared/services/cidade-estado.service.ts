import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../model/estado";
import {Cidade} from "../../model/cidade";
import DataSource from "devextreme/data/data_source";
import {map} from "rxjs";
import {ArrayDataSource} from "@angular/cdk/collections";

@Injectable({
  providedIn: 'root'
})
export class CidadeEstadoService {

  constructor(private http: HttpClient) {
  }

  getEstados() {
    return this.http.get<Estado[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  }

  getCidades(idEstado: number) {
    return this.http
      .get<Cidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome`);
  }
}
