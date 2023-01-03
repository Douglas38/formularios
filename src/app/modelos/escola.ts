

import { Turma } from "./turma";

export interface ESCOLA
{
  
  id: number;
  name: string;
  editar?: boolean;
  Turmas?:Turma[];
  

}