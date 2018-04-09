import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app.routing.module';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from './firebase.config';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemService } from './services/item.service';
import { AddItemComponent } from './componentes/add-item/add-item.component';
import { ItensComponent } from './componentes/itens/itens.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { AuthService } from './loginapp/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    ItensComponent,
    FooterComponent,
    LoginappComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireModule.initializeApp(environment.firebase, 'crud-angular-firestore'),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [ItemService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
