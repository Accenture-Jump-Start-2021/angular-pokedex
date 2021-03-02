import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewModule } from './overview/overview.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OverviewModule,
    DetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
