import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPageComponent } from './overview/overview-page/overview-page.component';
import { DetailPageComponent } from './detail/detail-page/detail-page.component';

const routes: Routes = [{
  path: '',
  component: OverviewPageComponent
}, {
  path: 'detail',
  component: DetailPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
