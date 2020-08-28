import { CursosRotasService } from './cursos-rotas.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'app-curso-rotas',
    templateUrl: './curso-rotas.component.html',
    styleUrls: ['./curso-rotas.component.css']
})
export class CursoRotasComponent implements OnInit {

    cursos;
    pagina;
    inscricao: Subscription;

    constructor(private cursosService: CursosRotasService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.cursos = this.cursosService.getCursos();

        this.inscricao = this.route.queryParams.subscribe(
            (queryParams: any) => {
                this.pagina = queryParams['pagina'];
            }
        )
    }

    proximaPagina() {
        this.router.navigate(['/curso-rotas'],
            { queryParams: { 'pagina': ++this.pagina } })
    }

}
