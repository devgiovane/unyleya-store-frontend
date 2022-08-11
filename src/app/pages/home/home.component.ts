import { Component, OnInit } from '@angular/core';
import { Navs } from "../../components/content/content.component";

@Component({
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public navs: Navs[] = [
		{ text: 'Home', path: null }
	];

  	constructor() { }

  	ngOnInit(): void { }

}
