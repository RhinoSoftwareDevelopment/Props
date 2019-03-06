import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';

import { ViewsModule } from './views/views.module'
import { ViewsRoutingModule } from './views/views-routing.module'

import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'BookProp'),
    ViewsModule,
    ViewsRoutingModule,
    ServicesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
