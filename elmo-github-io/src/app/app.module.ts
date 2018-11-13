import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Olli2019Component } from './olli2019/olli2019.component';
import { Ranua2019Component } from './ranua2019/ranua2019.component';
import { TapahtumatComponent } from './tapahtumat/tapahtumat.component';
import { UrkkiComponent } from './urkki/urkki.component';
import { Kesaloma2018Component } from './kesaloma2018/kesaloma2018.component';
import { LegorobottiComponent } from './legorobotti/legorobotti.component';
import { Elmo7vuottaComponent } from './elmo7vuotta/elmo7vuotta.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    Olli2019Component,
    Ranua2019Component,
    TapahtumatComponent,
    UrkkiComponent,
    Kesaloma2018Component,
    LegorobottiComponent,
    Elmo7vuottaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
