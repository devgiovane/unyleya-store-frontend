import * as qs from "qs";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Product } from "../entities/product";

@Injectable({
  	providedIn: 'root'
})
export class ProductService {

	private baseUrl = "http://localhost:8000/api/v1/product";

  	constructor(
  		private http: HttpClient
	) {

	}

	public createProduct(product: Product): Observable<any> {
		return this.http.post(this.baseUrl, qs.stringify(product), {
			headers: new HttpHeaders().set(
				'Content-Type', 'application/x-www-form-urlencoded'
			)
		});
	}

	public readProducts(): Observable<Product[]> {
  		return this.http.get<Product[]>(this.baseUrl);
	}

	public readOneProduct(id: string): Observable<Product> {
		return this.http.get<Product>(`${this.baseUrl}/${id}`);
	}

	public updateProduct(id: string, product: Product): Observable<any> {
		return this.http.put(`${this.baseUrl}/${id}`, qs.stringify(product), {
			headers: new HttpHeaders().set(
				'Content-Type', 'application/x-www-form-urlencoded'
			)
		});
	}

	public deleteProduct(id: string): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`);
	}

}
