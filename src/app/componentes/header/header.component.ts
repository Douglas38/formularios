import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/login/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isMenuOpened: boolean = false
 
  mostrarMenu: boolean = false
 
   constructor( private authservice: AuthService ){}

  ngOnInit(): void {

    this.authservice.mostarMenuemitter.subscribe(

      mostar => this.mostrarMenu = mostar
    );
    
  }

  togglermenu(): void{

    this.isMenuOpened = !this.isMenuOpened


}
}