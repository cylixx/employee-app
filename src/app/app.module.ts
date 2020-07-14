import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed to forms
import { HttpClientModule } from '@angular/common/http'; // needed to invoke Http services

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,       // Add: IMPORTANT!
    HttpClientModule   // Add: IMPORTANT!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
