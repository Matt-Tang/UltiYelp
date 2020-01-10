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

    onClick (): void {
    // alert("clicked");
    var price = 1;
    var location = '144 Bloor St W Toronto, ON M5S 1M4';
    var term = 'coffee';
    var radius = 1000;

    /* Set variable values */
    term = this.selectedFoodType.type;
    price = this.selectedPrice.id;

    if(this.selectedDistance.id == 1){
      radius = 500;
    }
    else if (this.selectedDistance.id == 2){
      radius = 1500;
    }
    else if (this.selectedDistance.id == 3){
      radius = 10000;
    }
    else {
      radius = 30000;
    }

    console.log('HERE');
    var url = 'https://api.yelp.com/v3/businesses/search?'+ 'location=' + location + '&radius='+radius + '&limit=1' + '&term=' + term + '&price=' + price; 
    
    var key = 'Bearer 5qbNtRLgi9Qy1T48fKEE-ryGRujEbs-NJD8Yv3-LzqCddMUbV5o6n45b62vLdbYMmL-jdmIMhMEitgyKK_dc5D19gigPSKPsYg4eAKPsESUvEC9nSrdrKtBesX0XXnYx';
    fetch (url, {
        method: 'GET',
        headers: {
            'Authorization' : key,
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => response.json().then (responseJson => {
        var redirect = responseJson.businesses[0].url;
        window.location.href = redirect;
        
    }))
}

 randomPlace (): void {
    var url1 = 'https://www.yelp.ca/biz/mr-tonkatsu-toronto?osq=katsu';
    var url2 = 'https://www.yelp.ca/biz/gyubee-japanese-grill-bloor-toronto?osq=gyubee';
    var url3 = 'https://www.yelp.ca/biz/tokyo-sushi-toronto-11';
    var url4 = 'https://www.yelp.ca/biz/sansotei-ramen-north-york';
    var urls =  [url1, url2, url3, url4];
    var random = Math.floor(Math.random()*4);
    window.location.href = urls[random];
}

  constructor() { }

  ngOnInit() {
  }

}
