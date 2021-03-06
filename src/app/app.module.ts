import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { InvestimentPortfolioComponent } from './home/investiment-portfolio/investiment-portfolio.component';
import { InvestimentTypesComponent } from './home/investiment-types/investiment-types.component';
import { HomeBrokerService } from './home-broker/home-broker.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InvestimentPortfolioComponent,
    InvestimentTypesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
