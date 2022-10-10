import { Component, OnInit } from '@angular/core';
import {Estado} from "../../../model/estado";
import {CidadeEstadoService} from "../../services/cidade-estado.service";
import {Cidade} from "../../../model/cidade";

@Component({
  selector: 'app-cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss']
})
export class CidadeEstadoComponent implements OnInit {

  estados!: Estado[];
  cidades!: Cidade[];

  constructor(private service: CidadeEstadoService) {
    this.service.getEstados().subscribe(dados => this.estados = dados);

  }

  ngOnInit(): void {}

  onValueChanged(e: any) {
    //console.log(e.previousValue)
    console.log(e.value.id)
    this.service.getCidades(e.value.id)
      .subscribe(cidades => {
        this.cidades = cidades;
        console.log(this.cidades);
    });
  }

}
