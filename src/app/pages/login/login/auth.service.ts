import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

usuarioAutenticado: boolean = false
mostarMenuemitter = new EventEmitter <boolean>();
 

  constructor( private router: Router) { }

  fazerLogin(usuario:Usuario) {
  
     if (usuario.name === 'usuario@hotmail.com' && 
     usuario.senha === '123456') {

      this.usuarioAutenticado = true

      this.mostarMenuemitter.emit(true)

      this.router.navigate(['/']);
    }

    else { this.usuarioAutenticado = false 
      this.mostarMenuemitter.emit(false)
    }
  }

  usuarioEstaAutenticado(){
     return this.usuarioAutenticado
  }
}
