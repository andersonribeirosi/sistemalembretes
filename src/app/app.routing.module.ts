

import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgModule } from "@angular/core";
import { AddItemComponent } from "./componentes/add-item/add-item.component";
import { CadUsuarioComponent } from "./componentes/cad-usuario/cad-usuario.component";
import { LoginappComponent } from "./loginapp/loginapp.component";
import { AuthGuard } from "./guards/auth.guard";

const APP_ROUTES: Routes = [

  { path: '', redirectTo: 'login-app', pathMatch: 'full' },
  // { path: 'login', component: LoginFormComponent  },
  {
    path: 'lembretes', component: NavbarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-item', component: AddItemComponent,
    canActivate: [AuthGuard]
  },
  { path: 'cad-usuario', component: CadUsuarioComponent },
  {
    path: 'login-app', component: LoginappComponent,

  }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
