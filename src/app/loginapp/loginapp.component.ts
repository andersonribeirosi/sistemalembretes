import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-loginapp',
  templateUrl: './loginapp.component.html',
  styleUrls: ['./loginapp.component.css']
})
export class LoginappComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    // console.log(this.usuario);
    this.auth.fazerLogin(this.usuario);
  }
}
