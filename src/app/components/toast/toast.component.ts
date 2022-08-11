import {Component, Input, OnInit} from '@angular/core';

@Component({
  	selector: 'app-toast',
  	templateUrl: './toast.component.html',
  	styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

	@Input("id")
	public id: string = "toast";

	@Input("message")
	public message: string = "Hello world!"

	@Input("color")
	public color: string = "bg-primary"

  	constructor() { }

  	ngOnInit(): void {
  	}

}
