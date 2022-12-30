import { Aluno } from "./aluno";

export interface Escola
{
  
  id: number;
  name: string;
  editar?: boolean;
  alunos?:Aluno[];

}