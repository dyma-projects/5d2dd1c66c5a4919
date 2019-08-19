import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {

  public texts: Array<{value}>= [];
  
  constructor() {
    this.texts.push({ value: "un" });
    this.texts.push({ value: "deux" });
    this.texts.push({ value: "trois" });
  }

  ngOnInit() {
  }

}
