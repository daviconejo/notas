import {Nota} from "./nota";
import {Produto} from "./produto";

export class ItensNota {

  id!: number;
  nota!: Nota;
  numeroItem!: number;
  produto!: Produto;
  quantidade!: number;
  valorTotal!: number;
}
