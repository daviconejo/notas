import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ClienteService} from "../../shared/services/cliente.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private http: HttpClient,
              private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(value => this.clientes = value);
  }

  // onSaved(e: any) {
  //   let cliente = e.changes[0].data;
  //   console.log(e.changes[0].type)
  //   if (e.changes[0].type === 'update') {
  //     this.clienteService.update(cliente).subscribe(value => value = cliente);
  //   } else if (e.changes[0].type === 'insert') {
  //     this.clienteService.create(cliente).subscribe((value: Cliente) => value = cliente);
  //   }
  // }

  onRowRemoved(e: any) {
    console.log(e.key)
    this.clienteService.delete(e.key).subscribe(value => value = e.key);
  }

  onRowInserted(e: any) {
    console.log(e.data);
    //console.log('create')
    let cliente = e.data;
    this.clienteService.create(cliente).subscribe((value: Cliente) => value = cliente);
  }

  onRowUpdated(e: any) {
    console.log(e.data);
    console.log('update');
    let cliente = e.data;
    this.clienteService.update(cliente).subscribe(value => value = cliente);
  }
}
