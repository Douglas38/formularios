import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Aluno } from '../modelos/aluno';
import { ESCOLA } from '../modelos/escola';
import { ESCOLAS } from '../modelos/mock.escolas';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit{
  escolaName: string = '';
  escola: any;
  escolas = ESCOLAS;

  alunos:any;
  aluno:any;
  Alunosclass: boolean = false;
   
  

  constructor(){ }

  ngOnInit(): void {}
    
  onselect(escola: ESCOLA): void {

    this.alunos = escola.Alunos;

    this.Alunosclass = !this.Alunosclass
    console.log(escola)

  };

  adicionaEscola(): void{
                            
    console.log(this.escola)
    this.escolas.push({id:this.escolas.length + 1, name: this.escola})
    console.log(this.escolas.length)
  }

  estouPegando(): void{

    console.log('acho que eu entendi')

  }

  deletar(escola:ESCOLA): void{
    
    const index = this.escolas.indexOf(escola);
    this.escolas.splice(index, 1)
    
    console.log(index)
    console.log('oi')
    

  }

  editar(escola:ESCOLA): void{

    escola.editar = !escola.editar
    console.log(escola)
  }

  adicionarAluno(): void{
    this.alunos.push({id:this.escolas.length + 1, name: this.aluno})
  }

  editarAluno(aluno:Aluno):void{
    aluno.editar = !aluno.editar
    console.log(aluno)
  }

  deletarAluno(aluno:Aluno):void{

    const index = this.alunos.indexOf(aluno);
    this.alunos.splice(index, 1)

  }

  voltar(): void{
    this.Alunosclass = !this.Alunosclass
  }
}