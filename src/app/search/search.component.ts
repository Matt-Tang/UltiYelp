import { Component, OnInit } from '@angular/core';
import { FoodType } from '../objects';
import { DietRestriction } from '../objects';
import { Price } from '../objects';
import { Distance } from '../objects';

import { FOODTYPES } from '../mock-foodType';
import { DIETRESTRICTIONS } from '../mock-dietRestriction';
import { PRICES } from '../mock-price';
import { DISTANCES } from '../mock-distance';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /*Constant array*/
  types = FOODTYPES;
  dietRestrictions = DIETRESTRICTIONS;
  prices = PRICES;
  distances = DISTANCES;

  selectedFoodType : FoodType;
  selectedDietRestriction : DietRestriction;
  selectedPrice : Price;
  selectedDistance: Distance;

  onSelectFoodType(type: FoodType): void {
    this.selectedFoodType = type;
  }

  onSelectDietRestriction(dietRestriction: DietRestriction): void {
    this.selectedDietRestriction = dietRestriction;
  }

  onSelectPrice(price: Price): void {
    this.selectedPrice = price;
  }

  onSelectDistance(distance: Distance): void {
    this.selectedDistance = distance;
  }

  constructor() { }

  ngOnInit() {
  }

}
