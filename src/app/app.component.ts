import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tech start';


	constructor(private router:Router) {}

  home() {
    location.href = "http://localhost:4200/";
    //this.router.navigate(["home"]);
  }

	listInvoice() {
		this.router.navigate(["list-invoice"]);
	}

  listDistributor() {
		this.router.navigate(["list-distributor"]);
	}

  listCustomer() {
		this.router.navigate(["list-customer"]);
	}

  listProduct() {
		this.router.navigate(["list-product"]);
	}

	Nuevo() {
		this.router.navigate(["add"]);
	}

}
