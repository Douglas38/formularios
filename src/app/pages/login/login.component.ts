import { Component, OnInit } from '@angular/core';


import { AuthService } from './login/auth.service';
import { Usuario } from 'src/app/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
 usuario: Usuario = new Usuario();

  
  
  
  constructor( private authservice: AuthService) {}
  
  ngOnInit(): void {}

  fazerLogin(): void {
 this.authservice.fazerLogin(this.usuario)

  }
}
