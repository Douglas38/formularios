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

  onselect(escola: ESCOLA): void {
 
 
  };



  constructor(){

  

  }


  ngOnInit(): void {}

  
  adicionaEscola(): void{
                                                                                                                                                                        
  console.log(this.escola)
    
  }


  estoupegando(): void{

    console.log('acho que eu entendi')

    
  }

  
}
