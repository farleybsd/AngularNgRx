import { UsuarioModel } from './../../app/Models/UsuarioModel';
import { createAction, props } from "@ngrx/store";

/*
    Acoes realizadas pelo usuario
    As ações são um dos principais blocos de construção do NgRx.
    As ações expressam eventos exclusivos que acontecem em todo o seu aplicativo. 
    Desde a interação do usuário com a página, interação externa por meio de solicitações 
    de rede e interação direta com as APIs do dispositivo, esses e mais eventos são 
    descritos com ações.
*/
export const enum usuariosTypeAction {

    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
    LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

    CREATE_USUARIO = '[CREATE_USUARIO_USUARIO] CREATE_USUARIO USUARIO',
    CREATE_USUARIO_USUARIO_SUCCESS = '[CREATE_USUARIO_USUARIO_SUCCESS] CREATE_USUARIO USUARIO SUCCESS',
    CREATE_USUARIO_USUARIO_FAIL = '[CREATE_USUARIO_USUARIO_FAIL] CREATE_USUARIO USUARIO FAIL',

    UPDATE_USUARIO = '[UPDATE_USUARIO_USUARIO] UPDATE_USUARIO USUARIO',
    UPDATE_USUARIO_USUARIO_SUCCESS = '[UPDATE_USUARIO_USUARIO_SUCCESS] UPDATE_USUARIO USUARIO SUCCESS',
    UPDATE_USUARIO_USUARIO_FAIL = '[UPDATE_USUARIO_USUARIO_FAIL] UPDATE_USUARIO USUARIO FAIL',

    DELETE_USUARIO = '[DELETE_USUARIO_USUARIO] DELETE_USUARIO USUARIO',
    DELETE_USUARIO_USUARIO_SUCCESS = '[DELETE_USUARIO_USUARIO_SUCCESS] DELETE_USUARIO USUARIO SUCCESS',
    DELETE_USUARIO_USUARIO_FAIL = '[DELETE_USUARIO_USUARIO_FAIL] DELETE_USUARIO USUARIO FAIL'

}

// Load Usuarios
export const LoadUsuarios = createAction(
    usuariosTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSUCCESS = createAction(
    usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
    props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFAIL = createAction(
    usuariosTypeAction.LOAD_USUARIOS_FAIL,
    props<{ error: string }>()
);

// Load Usuario 
export const LoadUsuario = createAction(
    usuariosTypeAction.LOAD_USUARIO,
    props<{ payload: number }>()
);

export const LoadUsuarioSUCCESS = createAction(
    usuariosTypeAction.LOAD_USUARIO_SUCCESS,
    props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFAIL = createAction(
    usuariosTypeAction.LOAD_USUARIO_FAIL,
    props<{ error: string }>()
);

// Create Usuario 

export const CreateUsuario = createAction(
    usuariosTypeAction.CREATE_USUARIO,
    props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSUCCESS = createAction(
    usuariosTypeAction.CREATE_USUARIO_USUARIO_SUCCESS,
    props<{ payload: UsuarioModel }>()
);

export const CreatesusuarioFAIL = createAction(
    usuariosTypeAction.CREATE_USUARIO_USUARIO_FAIL,
    props<{ error: string }>()
);

// Update Usuario 

export const UpdateUsuario = createAction(
    usuariosTypeAction.UPDATE_USUARIO,
    props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioSUCCESS = createAction(
    usuariosTypeAction.UPDATE_USUARIO_USUARIO_SUCCESS,
    props<{ payload: UsuarioModel }>()
);

export const UpdateusuarioFAIL = createAction(
    usuariosTypeAction.UPDATE_USUARIO_USUARIO_FAIL,
    props<{ error: string }>()
);

// Delete Usuario 

export const DeleteUsuario = createAction(
    usuariosTypeAction.DELETE_USUARIO,
    props<{ payload: number }>()
);

export const DeleteUsuarioSUCCESS = createAction(
    usuariosTypeAction.DELETE_USUARIO_USUARIO_SUCCESS,
    props<{ payload: number }>()
);

export const DeleteusuarioFAIL = createAction(
    usuariosTypeAction.DELETE_USUARIO_USUARIO_FAIL,
    props<{ error: string }>()
);
