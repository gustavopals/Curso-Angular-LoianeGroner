import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exemplos-pipes',
    templateUrl: './exemplos-pipes.component.html',
    styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

    livro: any = {
        titulo: 'O livro Teste',
        rating: '4.565',
        numeroPaginas: 314,
        preco: 44.99,
        paginas: 314,
        dataLancamento: new Date(2016, 5, 23),
        url: 'http://google.com.br'
    }

    constructor() { }

    ngOnInit(): void {
    }

}
