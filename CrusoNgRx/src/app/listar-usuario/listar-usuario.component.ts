import { UsuarioModel } from './../Models/UsuarioModel';
import { UsuarioService } from './../Repository/UsuarioService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  listaUsuario: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuario = usuarios;
    });
  }

}
