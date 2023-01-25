import { LoadUsuarios, CreateUsuario } from './UsuariosActions';
import { UsuarioService } from './../../app/Repository/UsuarioService';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects/src';
import * as fromUsuarioAction from "../Usuarios/UsuariosActions";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";

// Tratar os erros/success ao comunicar com o service
@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    loadUsuarios$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuarioAction.usuariosTypeAction.LOAD_USUARIOS),
                exhaustMap(() => this.usuarioService.getUsuarios()
                    .pipe(
                        map(payload =>
                            fromUsuarioAction.LoadUsuariosSuccess({ payload }),
                            catchError(error => of(fromUsuarioAction.LoadUsuariosFail({ error })))
                        )
                    )
                )
            )
    )

    loadUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuarioAction.usuariosTypeAction.LOAD_USUARIO),
                exhaustMap((record: any) => this.usuarioService.getUsuario(record.paylod)
                    .pipe(
                        map(payload =>
                            fromUsuarioAction.LoadUsuarioSuccess({ payload }),
                            catchError(error => of(fromUsuarioAction.LoadUsuarioFail({ error })))
                        )
                    )
                )
            )
    )


    CreateUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuarioAction.usuariosTypeAction.CREATE_USUARIO),
                exhaustMap((record: any) => this.usuarioService.addUsuario(record.paylod)
                    .pipe(
                        map(payload =>
                            fromUsuarioAction.CreateUsuarioSuccess({ payload }),
                            catchError(error => of(fromUsuarioAction.CreateUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    updateUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuarioAction.usuariosTypeAction.UPDATE_USUARIO),
                exhaustMap((record: any) => this.usuarioService.updateUsuario(record.payload)
                    .pipe(
                        map(payload =>
                            fromUsuarioAction.UpdateUsuarioSuccess({ payload }),
                            catchError(error => of(fromUsuarioAction.UpdateUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    deleteUsuario$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromUsuarioAction.usuariosTypeAction.DELETE_USUARIO),
                exhaustMap((record: any) => this.usuarioService.deleteUsuario(record.payload)
                    .pipe(
                        map(() =>
                            fromUsuarioAction.DeleteUsuarioSuccess({ payload: record.payload }),
                            catchError(error => of(fromUsuarioAction.DeleteUsuarioFail({ error })))
                        )
                    )
                )
            )
    )
}