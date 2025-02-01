import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { MiprimercomponenteComponent } from './vtmdev/miprimercomponente/miprimercomponente.component';
import { EjemploComponent } from './vtmdev/ejemplo/ejemplo.component';
import { Ejemplo2Component } from './vtmdev/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './vtmdev/ejemplo3/ejemplo3.component'
import { CrudModule } from './modules/crud/crud.module';
import { share } from 'rxjs';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    EjemploComponent,
    Ejemplo3Component,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ejemplo2Component,
    CrudModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
