import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SeletonLoaderModule } from './seleton-loader/seleton-loader.module'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeletonLoaderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
