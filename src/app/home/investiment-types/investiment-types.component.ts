import { Component, OnInit, Input } from '@angular/core';
import { Investimentos } from './investiment-type.model'
import {Tesouro, Coe, RendaVariavel, FundosInvestimento} from 'src/app/texts';

@Component({
  selector: 'app-investiment-types',
  templateUrl: './investiment-types.component.html',
  styleUrls: ['./investiment-types.component.css']
})
export class InvestimentTypesComponent implements OnInit {

  @Input() investiment: Investimentos[] = [
    {id: Tesouro.ID, name: Tesouro.NAME, description: Tesouro.DESCRIPTION, title: Tesouro.TYPE},
    {id: Coe.ID, name: Coe.NAME, description: Coe.DESCRIPTION, title: Coe.TYPE, type: Coe.TITLE},
    {id: RendaVariavel.ID, name: RendaVariavel.NAME, description: RendaVariavel.DESCRIPTION, title: RendaVariavel.TYPE},
    {id: FundosInvestimento.ID, name: FundosInvestimento.NAME, description: FundosInvestimento.DESCRIPTION, title: FundosInvestimento.TYPE}
  ]

  constructor() { }

  ngOnInit() {
  }

}
