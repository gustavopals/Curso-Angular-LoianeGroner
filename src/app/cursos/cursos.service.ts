import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CursosService {
    curso: string[] = ['Angular', 'PHP', 'Java', 'Delhpi'];
    passaCurso: number = 0;

    getCursos(): string[] {
        this.passaCurso = this.curso.length;
        return this.curso;
    }

    numeroCursos() {
        return this.passaCurso;
    }

    constructor() { }

}
