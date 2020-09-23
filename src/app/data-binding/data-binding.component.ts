import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url = 'https://www.google.com.br';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  nome = 'abc';
  nomeDoCurso = 'Angular Data-Binding';
  valorAtual = '';
  valorSalvo: string;
  valorSalvo2: string;
  isMouseOver = false;
  resultadoFinal = 0;
  num1 = '0';
  num2 = '0';
  valor = 5;
  deletarCiclo = false;
  testeIf = false;
  cursosCadastrados: string[] = ['Java', 'Angular', 'PHP', 'Android'];
  meuFavorito = false;
  cursos: string[] = [];
  teste: boolean;

  ativo = false;
  tamanhoFonte = 10;

  pessoa: any = {
    nome: 'Gustavo',
    idade: 24,
    telefone: {
      DDD: 42,
      numero: 999365350,
    },
  };

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }

  // tslint:disable-next-line: typedef
  onTesteIf() {
    // altera o valor de testeIf
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
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento); // Captura todos os eventos executados no campo
    console.log((evento.target as HTMLInputElement).value);
    this.valorAtual = (evento.target as HTMLInputElement).value;
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

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  soma() {
    return parseInt(this.valorSalvo) + parseInt(this.valorSalvo2);
  }

  somaFinal() {
    this.resultadoFinal = parseInt(this.num1) + parseInt(this.num2);
    console.log('somou');
  }
}
