import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { routes } from '../app/app.routes'; // Importa tus rutas
import { ContenidoComponent } from './contenido/contenido.component';
import { RegistroComponent } from './registro/registro.component';

// inicio servicio

// fin inicio

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    EncabezadoComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura el enrutamiento aquí
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
