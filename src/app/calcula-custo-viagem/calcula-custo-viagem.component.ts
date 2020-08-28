import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calcula-custo-viagem',
    templateUrl: './calcula-custo-viagem.component.html',
    styleUrls: ['./calcula-custo-viagem.component.css']
})
export class CalculaCustoViagemComponent implements OnInit {

    municipio = ["", "Castro", "Ponta Grossa", "Carambei", "Curitiba"];
    nome: string;
    origem = "";
    destino = "";
    ida: boolean = false;
    distancia: number;
    kmL: number;
    precoCombustivel: number;
    pedagio: number;
    resultado: number;
    clicou: boolean = false;
    consumido;

    constructor() { }

    ngOnInit(): void {
    }

    calculoFinal() {
        if (!this.ida) {
            this.resultado = this.distancia / this.kmL;
            this.consumido = this.distancia / this.kmL;
            this.resultado = this.resultado * this.precoCombustivel;
            this.resultado = this.resultado + this.pedagio;
            this.clicou = !this.clicou;
        }
        if (this.ida) {
            console.log("multiplicou")
            this.distancia = this.distancia * 2;
            this.pedagio = this.pedagio * 2;
            this.resultado = this.distancia / this.kmL;
            this.consumido = this.distancia / this.kmL;
            this.resultado = this.resultado * this.precoCombustivel;
            this.resultado = this.resultado + this.pedagio;
            this.clicou = !this.clicou;
        }
    }

}
