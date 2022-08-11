export interface Product {
	id?: string
	name: string
	price: number
}

export interface ProductErrors {
	name: boolean,
	price: boolean
}

export function newProduct(name: string, price: number): Product {
	return {
		name, price
	}
}

export function newProductErrors(): ProductErrors {
	return {
		name: false,
		price: false
	}
}
