import { ClientesService } from './../services/clientes.service';
import { Clientes } from './../models/clientes';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * @title Table with pagination
 */
@Component({
    selector: 'app-cadastro-clientes',
    templateUrl: './cadastro-clientes.component.html',
    styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

    constructor(private clientesService: ClientesService) { }
    cliente = {} as Clientes;
    clientes: Clientes[];
    clientesCadastrados: number = 0;

    ngOnInit(): void {
        this.getClientes();
    }

    // Chama o serviço para obtém todos os carros
    getClientes() {
        this.clientesService.getClientes().subscribe((clientes: Clientes[]) => {
            this.clientes = clientes;
            this.clientesCadastrados = this.clientes.length;

        });

    }

    cleanForm(form: NgForm) {
        this.getClientes();
        form.resetForm();
        this.cliente = {} as Clientes;
    }

}

