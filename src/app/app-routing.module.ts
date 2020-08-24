import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosComponent } from './cursos/cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [ //faz as rotas
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursosListaComponent },
]
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes) //importa o caminho
    ],
    exports: [
        RouterModule //exporta a pagina solicitada
    ]
})
export class AppRoutingModule { }
