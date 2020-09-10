import { delay, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
    providedIn: 'root'
})
export class HttpCursoService {

    private API = `${environment.API}Produto`;

    constructor(private http: HttpClient) { }

    list() {
        return this.http.get<Produto[]>(this.API)
            .pipe(
                delay(5000),
                tap(console.log)
            );
    }
}
