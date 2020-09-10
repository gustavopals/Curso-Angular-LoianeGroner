import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Produto } from './../models/produto';
import { Observable, empty, Subject, Subscription } from 'rxjs';
import { HttpCursoService } from './http-curso.service';
import { Component, OnInit, TemplateRef } from '@angular/core';



@Component({
    templateUrl: './http-curso.component.html',
    styleUrls: ['./http-curso.component.css']
})
export class HttpCursoComponent implements OnInit {

    produtos: Produto[];
    produtos$: Observable<Produto[]>;
    error$ = new Subject<boolean>(); //true or false para erro
    teste;

    constructor(private service: HttpCursoService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.onRefresh();
    }

    onRefresh() {
        //exemplo 1 - não faz o unsubscribe 
        //this.service.list()
        //.subscribe(dados => this.produtos = dados);
        //exemplo 2 - utiliza o pipe async
        this.produtos$ = this.service.list()
            .pipe(
                catchError(error => {
                    console.error(error);
                    this.error$.next(true); //caso ocorra um erro ele seta true para error$
                    return empty();
                })
            )
    }

    onDelete(curso) {


        this.teste = confirm('Tem certeza que deseja excluir este registro?');

        if (this.teste == true) {
            console.log('entrou no onDelete');
            this.service.delete(curso).subscribe(
                success => console.log('Excluiu'),
                erros => alert('Erro ao excluir o produto, verifique!'),
                () => { this.onRefresh, console.log("Produto delete"), alert("Produto excluido com sucesso!") })
            console.log('retornou do service');

        } else {
            alert('Registro nao excluido')

        }

    }

    onEdit(id) {
        this.router.navigate(['http-curso/editar', id])
    }

}
