import { ClientesService } from './../services/clientes.service';
import { Clientes } from './../models/clientes';


import { Component, OnInit, ViewChild } from '@angular/core';
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












    cliente = {} as Clientes
    clientes: Clientes[];

    ngOnInit(): void {
        this.getClientes();

    }

    // Chama o serviço para obtém todos os carros
    getClientes() {
        this.clientesService.getClientes().subscribe((clientes: Clientes[]) => {
            this.clientes = clientes;
        });

    }

    cleanForm(form: NgForm) {
        this.getClientes();
        form.resetForm();
        this.cliente = {} as Clientes;
    }

}

