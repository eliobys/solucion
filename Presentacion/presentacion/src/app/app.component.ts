import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/Services/UsuarioService';


@Component({
  selector: 'table-basic-example',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',

})
export class UsuarioTable  {
UsuarioList: any[] = [] ;
 constructor (private usuarioService:UsuarioService){}

LlenarTabla() : void{
  this.usuarioService.getUsuarios().subscribe((data:any[])=>{
    this.UsuarioList= data.map(item=>({id:item.usuID,nombreCompleto:item.nombre +" "+item.apellido }));

});
}
}

