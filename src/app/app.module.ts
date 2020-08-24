import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { CursosComponent } from './cursos/cursos.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        DataBindingComponent,
        InputPropertyComponent,
        OutputPropertyComponent,
        CicloComponent,
        CursosComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule, //roteamento
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
