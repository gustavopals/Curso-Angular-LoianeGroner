import { Cidadesbr } from './../models/cidadesbr';
import { EstadosBR } from './../models/estados-br';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConsultaEstadosService {

    url = 'assets/data/estadosbr.json';
    url2 = 'assets/data/cidadesbr.json';

    constructor(private http: HttpClient) { }

    getEstadosBR(): Observable<EstadosBR[]> {
        return this.http.get<EstadosBR[]>(this.url)
            .pipe(retry(2),
                catchError(this.handleError))

    }


    getCidades() {
        return this.http.get<Cidadesbr[]>(this.url2).pipe(retry(2),
            catchError(this.handleError))
    }




    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

}
