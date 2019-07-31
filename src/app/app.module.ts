import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';

import {SignInPage} from './pages/sign-in/sign-in.page';



import { AttendeeApiService } from './providers/attendee-api.service';

@NgModule({
  declarations: [AppComponent, SignInPage],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, ComponentsModule],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AttendeeApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  entryComponents:[SignInPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
