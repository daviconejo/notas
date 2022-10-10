export class Cliente {

  id!: number;
  codigo!: number;
  nome!: string;

  getDisplayValue(){
    return this.codigo + " - " + this.nome;
  }

}
