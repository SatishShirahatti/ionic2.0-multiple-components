import { Component } from '@angular/core';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items;

constructor(){
  this.initializeItems();
}

initializeItems(){
  this.items=[
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
      ];
}

getItems(ev){
  this.initializeItems();

  var val = ev.target.value;

  if(val && val.trim() != ''){
    this.items = this.items.filter((item) => {
      return(item.toLowerCase().indexOf(val.toLowerCase())> -1);
    })
  }
}

}
