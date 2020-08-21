import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  valor: number = 0;

  incrementa(){
    this.valor++
    console.log("incrementou");
  }

  decrementa(){
    this.valor--
    console.log("decrementou");
  }

  ngOnInit(): void {
  }

}
