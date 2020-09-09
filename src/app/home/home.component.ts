import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cont: number;

    constructor() { }

    ngOnInit(): void {
        this.cont = 0;
    }

    async soma() {

        for (let i = 0; i < 10; i++) {

            console.log("Processando numero: ", i);
            await this.delay(1000)
            this.cont++;
            console.log("Concluido");
        }
        alert("Finalizado!")
    }

    private delay(ms: number): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
}
