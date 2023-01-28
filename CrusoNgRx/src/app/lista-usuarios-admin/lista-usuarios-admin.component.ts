import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { Store } from '@ngrx/store';
import * as fromUsuarioAction from 'src/Store/Usuarios/UsuariosActions'
import * as fromUsuarioSelector from 'src/Store/Usuarios/usuario.reducer'
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from 'src/Store/app-state';

@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.scss'];
})
export class ListaUsuariosAdminComponent implements OnInit {

  //forma 1
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuariosAdministradores);

  //forma 2
  listaUsuarios2: UsuarioModel[] = [];

  //forma 3
  listaUsuarios3: UsuarioModel[] = [];

  //forma 4
  listaUsuarios4: UsuarioModel[] = [];

  //forma 5
  listaUsuarios5$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuariosAdministradoresPorParametro,{perfil: 'Administrador' });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //Forma 2
    this.store
      .select(fromUsuarioSelector.getUsuariosAdministradores)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios2 = usuarios;
      });

    //Forma 3
    this.store
      .select(fromUsuarioSelector.getUsuarios)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios3 = usuarios.filter((filter) => filter.perfil == 'Administrador');
      });

    //Forma 4
    this.store
      .select(fromUsuarioSelector.getUsuariosAdministradoresPorParametro,{perfil:'Administrador'})
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios4 = usuarios;
      });
  }

}
