import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpened: boolean = false

  togglermenu(): void{

    this.isMenuOpened = !this.isMenuOpened

    console.log("teste")


  }

  abrir(): void{
    
    console.log("abrir")


  }

}
