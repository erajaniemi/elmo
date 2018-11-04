import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Olli2019Component } from './olli2019/olli2019.component';
import { Ranua2019Component } from './ranua2019/ranua2019.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    Olli2019Component,
    Ranua2019Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
