import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Turma } from '../modelos/turma';
import { ESCOLA } from '../modelos/escola';
import { ESCOLAS } from '../modelos/mock.escolas';
import { Aluno } from '../modelos/aluno';
import { OutletContext } from '@angular/router';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit{

  
  escolaName: string = '';
  escola: any;
  escolas = ESCOLAS;

  Turmas:any;
  Turma:any;
  Turmasclass: boolean = false;

  Alunos:any;
  Aluno: any;
  Alunosclass: boolean = false;
  exibeTurma:boolean = false;
  exibeEscola:boolean = true;

   
  
 @Output() text: string = '';
  constructor(){ }

  ngOnInit(): void {}
    
  onselect(escola: ESCOLA): void {

    this.Turmas = escola.Turmas;
    console.log(escola.Turmas)
    this.exibeEscola = false;
    this.exibeTurma = true;

  };

  adicionaEscola(): void{
                            
    console.log(this.escola)
    this.escolas.push({id:this.escolas.length + 1, name:this.escolaName})
    console.log(this.escolas.length)
  }


  deletar(escola:ESCOLA): void{
    
    const index = this.escolas.indexOf(escola);
    this.escolas.splice(index, 1)
    
  }

  editar(escola:ESCOLA): void{

    escola.editar = !escola.editar
    console.log(escola)
  }

  onselected(turma:Turma): void{
     
    this.Alunos = turma.Alunos
    this.Alunosclass = !this.Alunosclass
   

    console.log(this.Aluno)
    
  }

  adicionarTurma(): void{
    this.Turmas.push({id:this.escolas.length + 1, name:this.Turma})
  }

  editarTurma(Turma:Turma):void{
    Turma.editar = !Turma.editar
    console.log(Turma)
  }

  deletarTurma(Turma:Turma):void{

    const index = this.Turmas.indexOf(Turma);
    this.Turmas.splice(index, 1)

  }

adicionarAluno():void{
   this.Alunos.push({id:this.escolas.length + 1, name: this.Aluno})

  }

deletarAluno(aluno:Aluno): void { 

  const index = this.Alunos.indexOf(aluno);
  this.Alunos.splice(index, 1)

 }

 editarAluno(aluno:Aluno):void{
  
  this.Aluno.editar = !this.Aluno.editar
  
 }

  voltar(): void{
    this.Turmasclass = !this.Turmasclass
    this.Alunosclass = !this.Alunosclass
  }

  exibirEscola(e:any){
    console.log('funcionou o output, estou recebendo um evento no componente escolas, disparado pelo componente turma')
    console.log(e)
    this.exibeEscola = !this.exibeEscola
  }
}