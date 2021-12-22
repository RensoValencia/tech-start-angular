import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListReportInvoice } from './Reports/list-invoice/list-invoice.component';
import { ListReportDistributor } from './Reports/list-distributor/list-distributor.component';
import { ListReportCustomer } from './Reports/list-customer/list-customer.component';
import { ListReportProduct } from './Reports/list-product/list-product.component';
import { AppComponent } from './app.component';

import { AddComponent } from './Reports/add/add.component';
import { EditComponent } from './Reports/edit/edit.component';

const routes: Routes = [
	{path: 'list-invoice', component: ListReportInvoice},
  {path: 'list-distributor', component: ListReportDistributor},
  {path: 'list-customer', component: ListReportCustomer},
  {path: 'list-product', component: ListReportProduct},
  {path: 'home', component: AppComponent},
	{path: 'add', component: AddComponent},
	{path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
