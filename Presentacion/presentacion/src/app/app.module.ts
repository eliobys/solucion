import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule } from '@angular/common/http';

import { UsuarioTable} from './app.component';


@NgModule({
  declarations: [
    UsuarioTable
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [UsuarioTable]
})
export class AppModule { }
