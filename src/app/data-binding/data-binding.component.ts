import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    url = 'https://www.google.com.br';
    cursoAngular = true;
    urlImagem = 'http://lorempixel.com/400/200/nature/';
    nome = 'abc';
    nomeDoCurso: string = 'Angular Data-Binding';
    valorAtual: string = '';
    valorSalvo: string;
    valorSalvo2: string;
    isMouseOver: boolean = false;
    resultadoFinal: number = 0;
    num1: string = '0';
    num2: string = '0';
    valor: number = 5;
    deletarCiclo: boolean = false;
    testeIf = false;
    cursosCadastrados: string[] = ["Java", "Angular", "PHP", "Android"];
    meuFavorito: boolean = false;

    ativo: boolean = false;
    tamanhoFonte: number = 10;

    pessoa: any = {
        nome: 'Gustavo',
        idade: 24,
        telefone: {
            DDD: 42,
            numero: 999365350
        }
    }

    mudarAtivo() {
        this.ativo = !this.ativo;
    }

    onClick() {
        this.meuFavorito = !this.meuFavorito;
    }

    onTesteIf() { //altera o valor de testeIf
        this.testeIf = !this.testeIf;
    }
    destruirCiclo() {
        this.deletarCiclo = true;
    }

    mudarValor() {
        this.valor++;
    }

    fazCalculo() {
        return 321231;
    }

    getValor() {
        return 1;
    }

    getCurtirCurso() {
        return true;
    }

    botaoClicado() {
        alert('Botão clicado')
    }

    onKeyUp(evento: KeyboardEvent) {
        console.log(evento); //Captura todos os eventos executados no campo
        console.log((<HTMLInputElement>evento.target).value);
        this.valorAtual = (<HTMLInputElement>evento.target).value;
    }

    salvarValor(valor) {
        this.valorSalvo = valor;
    }

    salvarValor2(valor) {
        this.valorSalvo2 = valor;
    }

    onMouseOverOut() {
        this.isMouseOver = !this.isMouseOver;
    }

    constructor() { }

    ngOnInit(): void {
    }

    soma() {
        return parseInt(this.valorSalvo) + parseInt(this.valorSalvo2);
    }

    somaFinal() {
        this.resultadoFinal = parseInt(this.num1) + parseInt(this.num2);
        console.log("somou");
    }

}
