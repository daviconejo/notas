import {Component, OnInit} from '@angular/core';
import {Nota} from "../../model/nota";
import {NotaService} from "../../shared/services/nota.service";
import {ClienteService} from "../../shared/services/cliente.service";
import {Cliente} from "../../model/cliente";
import {Produto} from "../../model/produto";
import {ProdutoService} from "../../shared/services/produto.service";
import {ItensNota} from "../../model/itens-nota";
import DevExpress from "devextreme";
import data = DevExpress.data;

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  dataSource: any = {};

  notas: Nota[] = [];
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  itensNota: ItensNota[] = []

  constructor(private service: NotaService,
              private clienteService: ClienteService,
              private produtoService: ProdutoService,
              ) {}

  ngOnInit(): void {
    this.asyncBuscaClientes();
    this.asyncBuscaProdutos();

    this.service.getNotas().subscribe(value => {
      this.notas = value;
      console.log(value);
    });
  }

  onNotaRemoved(e: any) {
    this.service.delete(e.key.id).subscribe(value => {
      e.key.id = value
    });
  }

  onNotaInserted(e: any) {

    this.service.create(e.data).subscribe((value: Nota) => {
      e.data = value
    });
  }

  onNotaUpdated(e: any) {

    this.service.update(e.data).subscribe(value => {
      e.data = value
    });
  }

  asyncBuscaClientes(){
    this.clienteService.getClientes().subscribe(x => {
      this.clientes = [];
      for (let item of x) {
        this.clientes.push(item as Cliente);
      }
    })
  }

  valueChange(obj: any, data: any) {
    data.setValue(obj);
  }

  asyncBuscaProdutos() {
    this.produtoService.getProdutos().subscribe(x => this.produtos = x);
  }

  onSavingItem(event: any, data: any) {

    data.setValue(data.value);

  }

  onInitNewRowNota(e: any) {

    console.log(e);
    if (!e.data.ItensNota) {
      e.data.itensNota = [];
    }

  }
}
