import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';
import { EmployeesComponent } from './employees/employees.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
	declarations: [ AppComponent, EmployeeDetailComponent, EmployeeListItemComponent, EmployeesComponent, ConfirmComponent ],
	imports: [ BrowserModule, HttpClientModule, AppRoutingModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
