import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { Error404Module } from './error404/error404.module';
import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';







@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    NgbModule.forRoot(),
    ItemsModule,
    AppRoutingModule,
    Error404Module,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
