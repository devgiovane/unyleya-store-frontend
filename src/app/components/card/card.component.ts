import { Component, Input, OnInit } from '@angular/core';

import { newProduct, Product } from "../../entities/product";

type OnEdit = (product: Product) => void;
type OnDelete = (product: Product) => void;

@Component({
  	selector: 'app-card',
  	templateUrl: './card.component.html',
  	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input("product")
	public product: Product;

	@Input("onDelete")
	public onDelete: OnDelete = () => {};

	@Input("onEdit")
	public onEdit: OnEdit = () => {};

  	constructor() {
  		this.product = newProduct('', 0);
	}

  	ngOnInit(): void {
  	}

}
