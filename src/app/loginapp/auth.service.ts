import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'anderson@gmail.com' &&
      usuario.senha === '123') {

      this.usuarioAutenticado = true;

      this.router.navigate(['/lembretes']);
    } else {
      this.usuarioAutenticado = false;
    }

  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
