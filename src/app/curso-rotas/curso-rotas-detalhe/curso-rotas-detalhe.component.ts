import { CursosRotasService } from './../cursos-rotas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-curso-rotas-detalhe',
    templateUrl: './curso-rotas-detalhe.component.html',
    styleUrls: ['./curso-rotas-detalhe.component.css']
})
export class CursoRotasDetalheComponent implements OnInit {

    id: number;
    inscricao: Subscription;
    curso;

    constructor(private route: ActivatedRoute,
        private cursoService: CursosRotasService,
        private router: Router) {
        console.log(this.route);
        //this.id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.inscricao = this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];

                this.curso = this.cursoService.getCurso(this.id);

                if (this.curso == null) {
                    this.router.navigate(['/'])
                }
            }
        )
    }

}
