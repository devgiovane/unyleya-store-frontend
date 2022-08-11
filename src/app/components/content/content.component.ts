import { Component, Input, OnInit } from '@angular/core';

export interface Navs {
	text: string,
	path: string | null
}

@Component({
  	selector: 'app-content',
  	templateUrl: './content.component.html',
  	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	@Input("icon")
	public icon: string;

	@Input("navs")
	public navs: Navs[];

  	constructor() {
  		this.icon = "";
  		this.navs = [];
	}

  	ngOnInit(): void {
  	}

}
