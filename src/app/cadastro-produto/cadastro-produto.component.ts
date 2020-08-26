import { NgForm } from '@angular/forms';
import { ProdutoService } from './../services/produtos.service';
import { Produto } from './../models/produto';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

    produto = {} as Produto;
    produtos: Produto[];
    produtosCadastrados: number = 0;
    numeros = [1, 2, 3, 4, 5, 6];
    teste



    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.getProdutos();
        this.countProduto();

    }

    countProduto() {
        this.produtos.map(e => {
            this.teste += e.ProdutoNome;
        })
    }


    saveProduto(form: NgForm) {
        if (this.produto.id !== undefined) {
            this.produtoService.updateProduto(this.produto).subscribe(() => {
                this.cleanForm(form);
            });
        } else {
            this.produtoService.saveProduto(this.produto).subscribe(() => {
                this.cleanForm(form);
            });
        }
    }

    getProdutos() {
        this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
            this.produtos = produtos;
            this.produtosCadastrados = this.produtos.length
        });
    }

    deleteProduto(produto: Produto) {
        this.produtoService.deleteProduto(produto).subscribe(() => {
            this.getProdutos();
        });
    }

    editProduto(produto: Produto) {
        this.produto = { ...produto };
    }

    cleanForm(form: NgForm) {
        this.getProdutos();
        form.resetForm();
        this.produto = {} as Produto;
    }

}
