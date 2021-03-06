//Librerias de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Flex
import { FlexLayoutModule } from '@angular/flex-layout';

//Modulos
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

//Formularios
import { FormsModule } from '@angular/forms';

//Pipes
import { ImagenPipe } from './pipes/imagen.pipe';

//Pages - componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AgregarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
