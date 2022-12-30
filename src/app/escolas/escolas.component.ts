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

  escola: any;
  escolas = ESCOLAS;
  selectedescola?: Escola; 
  alunos:Aluno[] = [];
  alunosEdit:boolean = false;

  constructor(){ }

  ngOnInit(): void {}
    
  selecionaEscola(escola: Escola): void {
    console.log(escola)
    this.alunosEdit = !this.alunosEdit;
  };

  adicionaEscola(): void{
                            
    console.log(this.escola)
    this.escolas.push({id:this.escolas.length + 1, name: this.escola})
    console.log(this.escolas.length)
  }

  estouPegando(): void{

    console.log('acho que eu entendi')

  }

  deletar(escola:Escola): void{
    
    const index = this.escolas.indexOf(escola);
    this.escolas.splice(index, 1)
    
    console.log(index)
    console.log('oi')
    

  }

  editar(escola:Escola): void{

    escola.editar = !escola.editar
    console.log(escola)
  }

  adicionaAluno(){

  }

  selecionaAluno(aluno:Aluno){
    console.log('seleciona')
  }
}