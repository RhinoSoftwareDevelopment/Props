import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ViewsModule } from './views/views.module'
import { ViewsRoutingModule } from './views/views-routing.module'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    ViewsRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
