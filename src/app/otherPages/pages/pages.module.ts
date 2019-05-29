import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina2Component } from '../pages/pagina2/pagina2.component';
import { Pagina3Component } from '../pages/pagina3/pagina3.component';
import { MaterialModule } from 'src/app/material/material.module';
import { Pagina1Component} from 'src/app/pages/pagina1/pagina1.component';
import { AppModule} from 'src/app/app.module';
@NgModule({
  declarations: [Pagina2Component,Pagina3Component],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    Pagina2Component,
    Pagina3Component
  ]
})
//Para declarar los componentes que correspondan a un modulo se deben de importar
//Los componentes se deben agregar a la lista de "declarations"
//Los componentes se agregan al apartado de exports

export class PagesModule { }
