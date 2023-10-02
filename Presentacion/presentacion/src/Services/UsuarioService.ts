import {Injectable} from '@angular/core';
import  {HttpClient } from '@angular/common/http';


@Injectable ({providedIn:'root'})
export class UsuarioService{
    private url:string='https://localhost:44396/api/Usuario/';
    constructor(private http : HttpClient){}
    getUsuarios(){
        return this.http.get<any[]>(this.url+'Get');
}
}