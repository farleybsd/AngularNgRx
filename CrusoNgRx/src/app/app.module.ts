import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { MainComponent } from './main/main.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { StoreModule } from '@ngrx/store';
import { appEffects, AppReducer } from 'src/Store/app-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    MainComponent,
    CadastroUsuariosComponent,
    ListaUsuariosAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(AppReducer), // Import Reduce
    EffectsModule.forRoot(appEffects), // Import Effects
    StoreDevtoolsModule.instrument() //Debug Browser
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
