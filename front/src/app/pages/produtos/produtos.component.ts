import { Component, OnInit } from '@angular/core';
import {Produto} from "../../model/produto";
import {ProdutoService} from "../../shared/services/produto.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private service: ProdutoService) {

  }

  ngOnInit(): void {
    this.service.getProdutos().subscribe(value => this.produtos = value);
  }

  onRowRemoved(e: any) {
    //console.log(e.key)
    this.service.delete(e.key.id).subscribe(value => value = e.key.id);
  }

  onRowInserted(e: any) {
    // console.log(e.data);
    // console.log('create')
    let produto = e.data;
    this.service.create(produto).subscribe((value: Produto) => value = produto);
  }

  onRowUpdated(e: any) {
    // console.log(e.data);
    // console.log('update');
    let produto = e.data;
    this.service.update(produto).subscribe(value => value = produto);
  }

}
