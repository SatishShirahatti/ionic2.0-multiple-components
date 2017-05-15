import { Component } from '@angular/core';
import {userDetails} from "../userForm/userdetails";
    


@Component({
  templateUrl: 'carsresult.html'
})
export class carresults {
userform =userDetails;
cardetails = [
	{
		image: 'assets/img/car1.jpg',
		name :'BMW',
		price:'10000',
	},
	{
		image: 'assets/img/car2.jpg',
		name :'mercedus',
		price:'40000',
	},
	{
		image: 'assets/img/car3.jpg',
		name :'Maruti',
		price:'30000',
	},
	{
		image: 'assets/img/car4.jpg',
		name :'Ferrari',
		price:'15000',
	},
	{
		image: 'assets/img/car5.jpg',
		name :'BMW',
		price:'20000',
	}
];


}