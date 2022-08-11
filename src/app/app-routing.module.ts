import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductCreateComponent } from "./pages/product-create/product-create.component";

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'product', component: ProductListComponent },
	{ path: 'product/create', component: ProductCreateComponent },
	{ path: 'product/:id', component: ProductCreateComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
