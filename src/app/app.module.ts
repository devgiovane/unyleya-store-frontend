import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ContentComponent } from './components/content/content.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
	declarations: [
		AppComponent,
  		CardComponent,
		HomeComponent,
		HeaderComponent,
		ProductListComponent,
  		ProductCreateComponent,
    	ContentComponent,
    	ToastComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
