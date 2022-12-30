import { Aluno } from "./aluno";

export interface ESCOLA
{
  
  id: number;
  name: string;
  editar?: boolean;
  Alunos?:Aluno[];

}