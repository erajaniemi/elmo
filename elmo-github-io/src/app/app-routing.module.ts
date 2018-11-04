import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Olli2019Component } from './olli2019/olli2019.component';
import { Ranua2019Component } from './ranua2019/ranua2019.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'olli',
    component: Olli2019Component
  },
  {
    path: 'ranua-2019',
    component: Ranua2019Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
