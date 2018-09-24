import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';




@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})




export class HeroesComponent implements OnInit {
    heroes = HEROES;

    // selectedHero: Hero;

    constructor() { }

    ngOnInit() {
    }

    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    // }
}