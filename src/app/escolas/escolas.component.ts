import { Component, OnInit } from '@angular/core';
import { Escola } from '../models/escola';
import { ESCOLAS } from '../mock.escolas';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit{

  escola: any;
  escolas = ESCOLAS;
  selectedescola?: Escola; 
  

  constructor(){ }

  ngOnInit(): void {}
    
  onselect(escola: Escola): void {

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
}