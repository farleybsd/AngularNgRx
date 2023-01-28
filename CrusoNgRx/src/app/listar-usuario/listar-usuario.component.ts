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
  listaUsuarios$ : Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuarios);
  listaUsuario$ : Observable<UsuarioModel | null> = this.store.select(fromUsuarioSelector.getUsuario);
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

  editar(id: number){
    this.store.dispatch(fromUsuarioAction.LoadUsuario({payload: id}))
  }


  excluir(id: number){
    this.store.dispatch(fromUsuarioAction.DeleteUsuario({payload: id}))
  }
}
