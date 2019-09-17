import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBrokerRoutingModule } from './home-broker-routing.module';
import { HomeBrokerComponent } from './home-broker.component';
import { HomeBrokerPriceComponent } from './home-broker-price/home-broker-price.component';
import { HomeBrokerBulletComponent } from './home-broker-bullet/home-broker-bullet.component';

@NgModule({
    imports: [
        CommonModule,
        HomeBrokerRoutingModule
    ],
    declarations: [HomeBrokerComponent, HomeBrokerPriceComponent, HomeBrokerBulletComponent]
})
export class HomeBrokerModule { }
