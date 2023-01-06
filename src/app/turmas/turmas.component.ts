import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Turma } from '../modelos/turma';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  
  escolas:any;
  Alunosclass: boolean = false;
  Turmas:any;
  Turma:any;
  Turmasclass: boolean = false;

  @Input() text: string = '';
  @Output() closeTurma = new EventEmitter();
  
  constructor(){}
  ngOnInit(): void {}

  onselected(turma:Turma): void{
    this.Alunosclass = !this.Alunosclass;
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
  voltar(): void{
    this.closeTurma.emit({"Evento": "Voltar"})
  }
 
}
