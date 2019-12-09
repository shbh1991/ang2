import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './header/header.component';

import { DataService } from "./services/data.service";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [],
  entryComponents: [HeaderComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(HeaderComponent, { injector: this.injector });
    customElements.define('app-header-section', myCustomElement);
  }
}