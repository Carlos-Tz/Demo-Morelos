import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeChartModule } from 'angular-gauge-chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdenComponent } from './components/orden/orden.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeChartModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
