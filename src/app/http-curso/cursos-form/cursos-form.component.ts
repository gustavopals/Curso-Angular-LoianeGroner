import { Subscription } from 'rxjs';
import { HttpCursoService } from './../http-curso.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './cursos-form.component.html',
    styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

    form: FormGroup; //declaração do form
    submitted = false;

    constructor(
        private fb: FormBuilder,
        private service: HttpCursoService,
        private router: Router,
        private route: ActivatedRoute) { }


    ngOnInit(): void {

        this.route.params.subscribe(
            (params: any) => {
                const id = params.id;
                console.log('Editar o ID: ', id);
                const produto$ = this.service.loadId(id);

                produto$.subscribe(produto => {
                    this.updateForm(produto);
                });
            }
        );


        this.form = this.fb.group({ //define os nomes dos campos + validators
            id: [null],
            ProdutoNome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(222)]]
        });
    }

    updateForm(produto) {

        this.form.setValue({
            id: produto.id,
            ProdutoNome: produto.ProdutoNome
        })


    }

    onSubmit() {
        this.submitted = true;
        console.log(this.form.value) //imprime o valor do campo
        if (this.form.valid) { //testa se o valor do campo é valido
            console.log('Submit')
            this.service.create(this.form.value).subscribe( //acessa a funcao create do service http-curso
                success => this.router.navigate(['http-curso']),//caso sucesso redireciona o usuario para pagina http-curso
                error => alert('Ocorreu um erro no servidor, verifique!'),//caso erro, mostra um alert
                () => alert('Produto cadastrado com sucesso'), //finaliza o request com sucesso
            );
        }
    }

    onCancel() {
        this.submitted = false;
        console.log('onCancel');
        this.form.reset();
        this.router.navigate(['http-curso']);

    }



    hasError(field: string) {
        return this.form.get(field).errors
    }

}
