import { Component, OnInit } from '@angular/core';
import { ESCOLA } from '../escola';
import { ESCOLAS } from '../mock.escolas';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit{
 

  ESCOLA = ESCOLAS;
  

  escola: ESCOLA ={
    id: 1,
    name: 'ciep',
    
  }

  selectedEscola?: ESCOLA;
  onselect(escola: ESCOLA): void {

    this.selectedEscola = escola
  };

  constructor(){}


  ngOnInit(): void {}

}
