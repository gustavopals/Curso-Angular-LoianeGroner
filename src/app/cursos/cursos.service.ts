import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CursosService {

    getCursos(): string[] {
        return ['Angular', 'PHP', 'Java'];
    }

    constructor() { }


}
