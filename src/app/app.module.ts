import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaludoComponent } from './saludo/saludo.component';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './otherPages/pages/pages.module';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
//import { MatFormFieldModule} from '@angular/material/form-field'; 
//El elemento de angular material NO debe declararse aqui ya que se esta declarando en MaterialModule
//derivado de declararlo aqui envía un error

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    Pagina1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
// Cuando se importa el angular material solo se declara en el apartado imports NO declarations    
//    MatFormFieldModule,
    MaterialModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
