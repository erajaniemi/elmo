import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Olli2019Component } from './olli2019/olli2019.component';
import { Ranua2019Component } from './ranua2019/ranua2019.component';
import { TapahtumatComponent } from './tapahtumat/tapahtumat.component';
import { UrkkiComponent } from './urkki/urkki.component';
import { Kesaloma2018Component } from './kesaloma2018/kesaloma2018.component';
import { LegorobottiComponent } from './legorobotti/legorobotti.component';
import { Elmo7vuottaComponent } from './elmo7vuotta/elmo7vuotta.component';
import { Ruka2018Component } from './ruka2018/ruka2018.component';
import { Annu2019Component } from './annu2019/annu2019.component';

const routes: Routes = [
  {
    path: 'ruka-2018',
    component: Ruka2018Component
  },
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'elmo-7-v',
    component: Elmo7vuottaComponent
  },
  {
    path: 'olli',
    component: Olli2019Component
  },
  {
    path: 'ranua-2018',
    component: Ranua2019Component
  },
  {
    path: 'tapahtumat',
    component: TapahtumatComponent
  },
  {
    path: 'urkki-2018',
    component: UrkkiComponent
  },
  {
    path: 'kesaloma-2018',
    component: Kesaloma2018Component
  },
  {
    path: 'legorobotti-2018',
    component: LegorobottiComponent
  },
  {
    path: 'annu-2019',
    component: Annu2019Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
