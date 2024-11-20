import { Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component'
import { SupportComponent } from './support/support.component'
import { AboutComponent } from './about/about.component'
import { EjemploDanteComponent } from './ejemplo-dante/ejemplo-dante.component'

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contenido', component: ContenidoComponent }, // Ruta para la página de proyecto
  { path: 'support', component: SupportComponent }, // Ruta para la página de soporte
  { path: 'registro', component: RegistroComponent }, // Ruta para la página de iniciar sesion/registro
  { path: 'about', component: AboutComponent }, // Ruta para la página de Acerca de
  { path: 'jejej', component: EjemploDanteComponent } // Ruta para la pagina de Dante
];


