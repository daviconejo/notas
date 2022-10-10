import {Cliente} from "./cliente";
import {ItensNota} from "./itens-nota";

export class Nota {

  id!: number;
  numeroDaNota!: number;
  data!: string;
  cliente!: Cliente;
  itensNota!: ItensNota[];
}
