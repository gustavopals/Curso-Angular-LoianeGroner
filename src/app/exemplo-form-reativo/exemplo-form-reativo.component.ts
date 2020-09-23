import { Cidadesbr } from './../models/cidadesbr';
import { Subscription } from 'rxjs';
import { EstadosBR } from './../models/estados-br';
import { ConsultaEstadosService } from './../services/consulta-estados.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';

@Component({
  selector: 'app-exemplo-form-reativo',
  templateUrl: './exemplo-form-reativo.component.html',
  styleUrls: ['./exemplo-form-reativo.component.css'],
})
export class ExemploFormReativoComponent implements OnInit {
  estadoteste: Promise<any>;
  itens;
  formTeste;
  estados: EstadosBR[];
  cidades: Cidadesbr[];
  sigla;
  estadoSelecionado;
  estadoMultiple;
  opcao;
  qcidade;

  constructor(
    private http: HttpClient,
    private consultaEstados: ConsultaEstadosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.consultaEstados.getEstadosBR().subscribe((estados: EstadosBR[]) => {
      this.estados = estados;
      console.log(estados);
    });
    this.consultaEstados.getCidades().subscribe((cidades: Cidadesbr[]) => {
      this.cidades = cidades;
      console.log(cidades);
    });
    this.itens = this.consultaEstados.getEstadosBR();

    this.formTeste = new FormGroup({
      estadoSelecionado: new FormControl(),
      estadoMultiple: new FormControl(),
      opcao: new FormControl(),
      cidadeSelecionado: new FormControl(),
    });
  }

  onSubmit(customerData) {
    this.formTeste.reset();
    this.sigla = customerData;
    this.estadoSelecionado = this.sigla.estadoSelecionado;
    this.estadoMultiple = this.sigla.estadoMultiple;
    this.opcao = this.sigla.opcao;
    this.qcidade = this.cidades.length;
    console.warn('Estado Registrado!', customerData);
  }
}
