import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ESCOLA } from '../escola';
import { ESCOLAS } from '../mock.escolas';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit{

  escola: any;
  ESCOLA = ESCOLAS;
  selectedEscola?: ESCOLA; 

  constructor(){ }

  ngOnInit(): void {}
    
  onselect(escola: ESCOLA): void {};

  adicionaEscola(): void{
                                                                                                                                                                        
    console.log(this.escola)
    
  }

  estouPegando(): void{

    console.log('acho que eu entendi')

  }

}
