import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  couleur: string = 'blue';
  interpolation = "Texte lié par interpolation";

  constructor() { }

  ngOnInit() {
  }

  afficheMessageSurvol() {
    console.log("Survol du bouton : liaison d'événement");
  }

  effacerConsole() {
    console.clear();
  }
}
