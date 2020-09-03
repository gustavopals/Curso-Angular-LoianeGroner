import { Clientes } from './../models/clientes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GeralService {

    urlConsultor = 'http://localhost:3000/Consultor';
    urlCliente = 'http://localhost:3000/Cliente';
    urlProjeto = 'http://localhost:3000/Projeto';
    urlTipoAtividade = 'http://localhost:3000/TipoAtividade';
    urlDepartamento = 'http://localhost:3000/Departamento';
    urlModulo = 'http://localhost:3000/Modulo';


}
