import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { Navs } from "../../components/content/content.component";

import { ProductService } from "../../services/product.service";
import { newProduct, newProductErrors, Product, ProductErrors } from "../../entities/product";

@Component({
  	selector: 'app-product-create',
  	templateUrl: './product-create.component.html',
  	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	public id: string | null = null;
	public product: Product;
	public errors: ProductErrors;
	public navs: Navs[] = [
		{ text: 'Product', path: '/product' },
		{ text: 'Create', path: null }
	];

  	constructor(
  		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService
  	) {
  		this.errors = newProductErrors();
  		this.product = newProduct('', 0);
	}

  	ngOnInit(): void {
  		if (Object.keys(this.route.snapshot.params).length > 0) {
			const id = this.route.snapshot.params['id'];
			this.id = id;
			this.getProduct(id);
		}
	}

	public getProduct(id: string) {
  		this.productService.readOneProduct(id)
			.subscribe(product => {
				this.product = product;
			}, error => {
				if(error.status == 404) {
					this.product = newProduct('', 0);
				}
			});
	}

	private validateProduct(): boolean {
		let hasError = false;
		this.errors = newProductErrors();
		if (!this.product.name) {
			this.errors.name = true;
			hasError = true;
		}
		if (this.product.price <= 0) {
			this.errors.price = true;
			hasError = true;
		}
		return hasError;
	}

  	public createProduct(): void {
  		if (!this.validateProduct()) {
  			if (!this.id) {
				this.productService.createProduct(this.product)
					.subscribe(() => {
						this.goToListProducts();
					});
			} else {
				this.productService.updateProduct(this.id, this.product)
					.subscribe(() => {
						this.goToListProducts();
					});
			}
		}
	}

  	public goToListProducts(): void {
  		this.router.navigate(["product"])
			.then(console.log);
  	}

}
