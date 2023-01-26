import { AppState } from './../../Store/app-state';
import { UsuarioModel } from './../Models/UsuarioModel';
import { UsuarioService } from './../Repository/UsuarioService';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsuarioAction from 'src/Store/Usuarios/UsuariosActions'
import * as fromUsuarioSelector from 'src/Store/Usuarios/usuario.reducer'
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  //listaUsuario: UsuarioModel[] = [];
  listaUsuario$ : Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuarios);
  constructor(
      private store: Store<AppState>
    //private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    // this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
    //   this.listaUsuario = usuarios;
    // });

    this.store.dispatch(fromUsuarioAction.LoadUsuarios())
  }

}
