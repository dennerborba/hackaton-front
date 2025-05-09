import { NomeMedicamento } from "./nomeMedicamentos.model";

export interface ItemReceita{
  id?: number;
  receita_id: number
  medicamento: NomeMedicamento
  quantidade: number
  dose: string
  frequencia: number
  orientacao: string
}
