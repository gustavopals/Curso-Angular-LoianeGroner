import { delay, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class HttpCursoService {
  private API = `${environment.API}Produto`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get<Produto[]>(this.API)
      .pipe(delay(100), tap(console.log));
  }

  create(curso) {
    alert('Produto cadastrado com sucesso!');
    return this.http.post(this.API, curso); //Utiliza do metodo Post, pega a Url da Api + o objeto passado pelo componente 'curso'
  }

  update(curso) {
    alert('Produto alterado com sucesso!');
    return this.http.put(this.API + '/' + curso.id, curso);
  }

  delete(id) {
    console.log('chegou no service', id);

    return this.http.delete(this.API + '/' + id);
  }

  loadId(id) {
    return this.http.get(this.API + '/' + id);
  }

  save(curso) {
    if (curso.id) {
      return this.update(curso);
    } else {
      return this.create(curso);
    }
  }
}
