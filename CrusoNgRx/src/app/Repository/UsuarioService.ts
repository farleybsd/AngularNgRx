import { UsuarioModel } from './../Models/UsuarioModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class UsuarioService{
    
    constructor( private http: HttpClient,) {

    }

    getUsuarios(){
        return this.http.get("http://localhost:3000/usuarios")
    }

    getUsuario(id :number){
        return this.http.get("http://localhost:3000/usuarios/"+ id)
    }

    addUsuario(redord:UsuarioModel){
        let headers = new HttpHeaders();
        headers.set('Content-Type','application/json;charset=utf8')
        return this.http.post("http://localhost:3000/usuarios",JSON.stringify(redord),{headers:headers})
    }

    updateUsuario(redord:UsuarioModel){
        let headers = new HttpHeaders();
        headers.set('Content-Type','application/json;charset=utf8')
        return this.http.put("http://localhost:3000/usuarios/" + redord.id,JSON.stringify(redord),{headers:headers})
    }

    deleteUsuario(id :number){
        let headers = new HttpHeaders();
        headers.set('Content-Type','application/json;charset=utf8')
        return this.http.delete("http://localhost:3000/usuarios/" + id,{headers:headers})
    }
}