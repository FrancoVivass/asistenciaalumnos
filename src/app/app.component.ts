import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from '../app/encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RegistroComponent } from './registro/registro.component'
import { InicioComponent } from './inicio/inicio.component'
import { AboutComponent } from './about/about.component'
import { EjemploDanteComponent } from './ejemplo-dante/ejemplo-dante.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, FooterComponent, ContenidoComponent, RegistroComponent, InicioComponent, AboutComponent, EjemploDanteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';


  
}
