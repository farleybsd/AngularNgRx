import { ActionReducerMap } from '@ngrx/store';
import { usuariosReducer, UsuarioState } from './Usuarios/usuario.reducer';
import { UsuarioEffects } from './Usuarios/usuarios.effects';

export interface AppState{
    usuarios: UsuarioState // ser o mesmo no getUsuariosFeatureState no reducer
}

export const AppReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
}

export const appEffects = [
    UsuarioEffects
]