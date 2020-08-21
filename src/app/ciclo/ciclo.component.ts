import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-ciclo',
    templateUrl: './ciclo.component.html',
    styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

    @Input() valorInicial: number = 10;

    constructor() {
        this.log('constructor');
    }

    ngOnchanges() {
        this.log('ngOnChanges');
    }

    ngDoCheck() {
        this.log('ngDoCheck');
    }

    ngOnDestroy() {
        this.log('ngOnDestroy');
    }

    ngOnInit(): void {
        this.log('ngOnInit');
    }

    private log(hook: string) {
        console.log(hook);
    }

}
