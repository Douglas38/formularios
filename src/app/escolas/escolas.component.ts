import { Component, OnInit } from '@angular/core';
import { Escola } from '../models/escola';
import { ESCOLAS } from '../mock.escolas';
import { Aluno } from '../models/aluno';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit{

  escolaName:string = '';
  escolas = ESCOLAS;

  alunoName:string = '';
  alunos:any;
  alunosEdit:boolean = false;

  constructor(){ }

  ngOnInit(): void {}
    
  selecionaEscola(escola: Escola): void {
    this.alunos = escola.alunos;
    this.alunosEdit = !this.alunosEdit;
  };

  adicionaEscola(): void{
                          
    this.escolas.push({id:this.escolas.length + 1, name: this.escolaName})

  }

  estouPegando(): void{
    console.log('acho que eu entendi')
  }

  deletar(escola:Escola): void{
    const index = this.escolas.indexOf(escola);
    this.escolas.splice(index, 1)
  }

  editar(escola:Escola): void{

    escola.editar = !escola.editar
    console.log(escola)
  }

  adicionaAluno(){
    this.alunos.push({id:this.escolas.length + 1, name: this.alunoName})
  }

  selecionaAluno(aluno:Aluno){
    console.log('seleciona')
  }

  deletarAluno(aluno:Aluno): void{
    const index = this.alunos.indexOf(aluno);
    this.alunos.splice(index, 1)
  }

  editarAluno(aluno:Aluno): void{
    aluno.editar = !aluno.editar
  }

  voltar(){
    this.alunosEdit = !this.alunosEdit;
  }
}