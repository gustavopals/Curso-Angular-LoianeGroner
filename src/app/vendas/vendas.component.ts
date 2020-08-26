import { NgForm } from '@angular/forms';
import { VendasService } from './../services/vendas.service';
import { Vendas } from './../models/vendas';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vendas',
    templateUrl: './vendas.component.html',
    styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

    venda = {} as Vendas;
    vendas: Vendas[];
    vendasCadastrados: number = 0;
    numeros = [1, 2, 3, 4, 5, 6];
    teste



    constructor(private vendaService: VendasService) { }

    ngOnInit(): void {
        this.getVendas();
        this.countVenda();

    }

    countVenda() {

    }


    saveVenda(form: NgForm) {
        if (this.venda.id !== undefined) {
            this.vendaService.updateVendas(this.venda).subscribe(() => {
                this.cleanForm(form);
            });
        } else {
            this.vendaService.saveVendas(this.venda).subscribe(() => {
                this.cleanForm(form);
            });
        }
    }

    getVendas() {
        this.vendaService.getVendas().subscribe((vendas: Vendas[]) => {
            this.vendas = vendas;
            this.vendasCadastrados = this.vendas.length
        });
    }

    deleteVenda(venda: Vendas) {
        this.vendaService.deleteVendas(venda).subscribe(() => {
            this.getVendas();
        });
    }

    editVenda(venda: Vendas) {
        this.venda = { ...venda };
    }

    cleanForm(form: NgForm) {
        this.getVendas();
        form.resetForm();
        this.venda = {} as Vendas;
    }

}
