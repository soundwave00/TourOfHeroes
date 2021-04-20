import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HEROES } from '../mock-heroes'

@Component({ /* mi descrive gli Angular metadata per il componente */
  selector: 'app-heroes', // the component's CSS element selector 
  templateUrl: './heroes.component.html', // the location of component template
  styleUrls: ['./heroes.component.css'] // the location of private CSS style
})
export class HeroesComponent implements OnInit { // export per poi poter chiamare import in altre parti

  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor() { }
  
  ngOnInit(): void {
  }
}
