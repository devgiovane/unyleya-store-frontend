import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Toast } from "bootstrap";
import { Product } from "../../entities/product";
import { ProductService } from "../../services/product.service";
import { Navs } from "../../components/content/content.component";

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	public isLoading: boolean = true;
	public products: Product[]
	public navs: Navs[] = [
		{ text: 'Product', path: null }
	];
	public toast: string = "toast";
	public message: string = "";

	constructor(
		private router: Router,
		private productService: ProductService
	) {
		this.products = [];
	}

	ngOnInit(): void {
		this.getProducts();
	}

	private getProducts(): void {
		this.productService.readProducts()
			.subscribe(products => {
				this.products = products;
				this.isLoading = false;
			}, error => {
				if(error.status == 404) {
					this.products = [];
				}
				this.isLoading = false;
			});
	}

	public onDelete(product: Product): void {
		if(product.id) {
			this.productService.deleteProduct(product.id)
				.subscribe(() => {
					const toastEl = document.getElementById(this.toast)
					if (toastEl) {
						this.message = "Product deleted successfully!"
						let toast = new Toast(toastEl);
						toast.show();
					}
					this.getProducts();
				});

		}
	}

	public goToCreateProduct(): void {
		this.router.navigate([ "product/create" ])
			.then(console.log);
	}

	public onEdit(product: Product): void {
		if(product.id) {
			this.router.navigate([ `product/${product.id}` ])
				.then(console.log);
		}
	}

}
