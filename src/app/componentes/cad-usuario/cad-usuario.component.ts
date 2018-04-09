import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  form_cadastro(f: NgForm) {
    let email = f.controls.email.value.toString().trim();
    let senha = f.controls.senha.value.toString().trim();
    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
    .then(t => {
      f.controls.senha.setValue('');
      f.controls.senhaconfirmacao.setValue('');
      f.controls.email.setValue('');
      f.controls.emailconfirmacao.setValue('');
    alert('Usuário criado com sucesso! \n Id: ' + t.uid);
    this.router.navigate(["/login"]);
    })
    .catch(c => {
    alert('Ocorreu um problema! \n Erro: ' + c.message);
    })
    }


  verificaSeEmailsSaoIguais(f: NgForm): boolean {
    if (f.controls.email)
    return f.controls.email.value.toString().trim() == f.controls.emailconfirmacao.value.toString().trim();
    return false;
    }
    verificaSeSenhasSaoIguais(f: NgForm): boolean {
    if (f.controls.senha)
    return f.controls.senha.value.toString().trim() == f.controls.senhaconfirmacao.value.toString().trim();
    return false;
    }
    verificaSeFormEValido(f: NgForm): boolean {
    return f.form.valid && this.verificaSeEmailsSaoIguais(f) && this.verificaSeSenhasSaoIguais(f);
    }

}
