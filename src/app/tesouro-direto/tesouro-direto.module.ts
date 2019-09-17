import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesouroDiretoRoutingModule } from './tesouro-direto-routing.module';
import { TesouroDiretoComponent } from './tesouro-direto.component';

@NgModule({
    imports: [
        CommonModule,
        TesouroDiretoRoutingModule
    ],
    declarations: [TesouroDiretoComponent]
})
export class TesouroDiretoModule { }
