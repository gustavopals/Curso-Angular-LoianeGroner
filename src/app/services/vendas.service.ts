import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Vendas } from './../models/vendas';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VendasService {

    url = 'http://localhost:3000/Venda';

    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    // Obtem todos os carros
    getVendas(): Observable<Vendas[]> {
        return this.httpClient.get<Vendas[]>(this.url)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    // Obtem um carro pelo id
    getVendasById(id: number): Observable<Vendas> {
        return this.httpClient.get<Vendas>(this.url + '/' + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // salva um carro
    saveVendas(venda: Vendas): Observable<Vendas> {
        return this.httpClient.post<Vendas>(this.url, JSON.stringify(venda), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // utualiza um carro
    updateVendas(venda: Vendas): Observable<Vendas> {
        return this.httpClient.put<Vendas>(this.url + '/' + venda.id, JSON.stringify(venda), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // deleta um carro
    deleteVendas(venda: Vendas) {
        return this.httpClient.delete<Vendas>(this.url + '/' + venda.id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
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
