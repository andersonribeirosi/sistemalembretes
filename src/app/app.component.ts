import { Component } from '@angular/core';
import { AuthService } from './loginapp/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostrarMenu: boolean = false;

  constructor(private auth: AuthService){

  }

  ngOnInit(){
    this.auth.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
