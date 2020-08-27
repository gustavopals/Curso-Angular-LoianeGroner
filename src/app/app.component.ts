import { CursosService } from './cursos/cursos.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private cursosService: CursosService) { }

    title = 'data-bindig';
    aba = 'home';
    numCurso = 1;
    cursos;

    ngOnInit(): void {
        this.cursos = this.cursosService.getCursos();
        this.numCurso = this.cursosService.numeroCursos();
    }
}
