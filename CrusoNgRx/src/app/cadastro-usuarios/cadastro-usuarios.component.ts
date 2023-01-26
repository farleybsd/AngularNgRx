import { AppState } from './../../Store/app-state';
import { UsuarioService } from './../Repository/UsuarioService';
import { UsuarioModel } from './../Models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsuarioAction from 'src/Store/Usuarios/UsuariosActions'
@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(
    private store : Store<AppState>
    //private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
  }

  addUsuario() {

    if (this.model.id == 0) {
      //Cadastra
      //this.usuarioService.addUsuario(this.model).subscribe();
      this.store.dispatch(fromUsuarioAction.CreateUsuario({payload:this.model}))
    } else{
      // Atualiza
      this.store.dispatch(fromUsuarioAction.UpdateUsuario({payload:this.model}))
    }

  }
}
