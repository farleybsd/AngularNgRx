import { CreatesusuarioFAIL } from './UsuariosActions';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UsuarioModel } from './../../app/Models/UsuarioModel';
import * as fromUsuariosAction from "../Usuarios/UsuariosActions";

/*
Os redutores no NgRx são responsáveis por manipular as transições de um estado para o 
próximo estado em sua aplicação. As funções redutoras lidam com essas transições 
determinando quais ações devem ser tratadas com base no tipo de ação.
tipo objeto vazio pata objeto com  valor
*/

export interface UsuarioState {
    usuarios: UsuarioModel[],
    usuario: UsuarioModel | null,
    error: string | ''
}

export const initialState: UsuarioState = {
    usuarios: [],
    usuario: null,
    error: ''
}

// Atualizar o Usuario com o retorno da API
const _usuariosReducer = createReducer(
    initialState,
    on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({ ...state, usuarios: payload, error: '' })), // Parametros das Actions
    on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({ ...state, error: error })),

    on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({ ...state, usuario: payload, error: '' })), // Parametros das Actions
    on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({ ...state, error: error })),

    on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({ ...state, usuarios: [...state.usuarios, payload], error: '' })), // Parametros das Actions
    on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({ ...state, error: error })),

    on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: [...state.usuarios, payload].map((row) => {
            if (row.id == payload.id) {
                return payload;
            }
            else {
                return row;
            }
        }),
        error: ''
    })), // Parametros das Actions


    on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({ ...state, error: error })),

    on(fromUsuariosAction.DeleteUsuarioSuccess, (state, { payload }) => ({
        ...state, usuarios: [...state.usuarios].filter((filter)=> filter.id != payload),
        error: ''
    })), // Parametros das Actions


    on(fromUsuariosAction.CreateUsuarioFail,(state,{ error })=>({...state, error: error})),
)

export function usuariosReducer(state = initialState, action: Action) {
    return _usuariosReducer(state, action);
}

//Selector fica ouvindo a mudanca na store 
//Seletores são funções puras usadas para obter fatias do estado do Store

const getUsuariosFeatureState = createFeatureSelector<UsuarioState>(
    'usuarios',
)

export const getUsuarios = createSelector(
    getUsuariosFeatureState,
    (state:UsuarioState) => state.usuarios 
)

export const getUsuario = createSelector(
    getUsuariosFeatureState,
    (state:UsuarioState) => state.usuario 
)

export const getUsuarioErro = createSelector(
    getUsuariosFeatureState,
    (state: UsuarioState) => state.error
)

export const getUsuariosAdministradores = createSelector(
    getUsuariosFeatureState,
    (state: UsuarioState) => state.usuarios.filter((filter)=> filter.perfil == 'Administrador')
)

// export const getUsuariosAdministradoresPorParametro = createSelector(
//     getUsuariosFeatureState,
//     (state: UsuarioState, props:{ perfil:string }) => state.usuarios.filter((filter)=> filter.perfil == props.perfil)
// )

export const getUsuariosIdadeMaiorQue50 = createSelector(
    getUsuariosFeatureState,
    (state: UsuarioState) => state.usuarios.filter((filter)=> filter.idade >= 50)
)
