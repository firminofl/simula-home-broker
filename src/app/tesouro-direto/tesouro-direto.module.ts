import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesouroDiretoRoutingModule } from './tesouro-direto-routing.module';
import { TesouroDiretoComponent } from './tesouro-direto.component';
import { TesouroDiretoInvestimentosComponent } from './tesouro-direto-investimentos/tesouro-direto-investimentos.component';
import { TesouroDiretoOfertasComponent } from './tesouro-direto-ofertas/tesouro-direto-ofertas.component';

@NgModule({
    imports: [
        CommonModule,
        TesouroDiretoRoutingModule
    ],
    declarations: [TesouroDiretoComponent, TesouroDiretoInvestimentosComponent, TesouroDiretoOfertasComponent]
})
export class TesouroDiretoModule { }
