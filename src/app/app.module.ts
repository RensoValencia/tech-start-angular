import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListReportInvoice } from './Reports/list-invoice/list-invoice.component';
import { ListReportDistributor } from './Reports/list-distributor/list-distributor.component';
import { ListReportCustomer } from './Reports/list-customer/list-customer.component';
import { ListReportProduct } from './Reports/list-product/list-product.component';

import { AddComponent } from './Reports/add/add.component';
import { EditComponent } from './Reports/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListReportInvoice,
    ListReportDistributor,
    ListReportCustomer,
    ListReportProduct,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
