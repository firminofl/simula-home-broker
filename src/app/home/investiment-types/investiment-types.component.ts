import { Component, OnInit, Input } from '@angular/core';
import { Investimentos } from './investiment-type.model'
import { tesouro, coe, rendaVariavel, fundosInvestimento } from 'src/app/texts';

@Component({
  selector: 'app-investiment-types',
  templateUrl: './investiment-types.component.html',
  styleUrls: ['./investiment-types.component.css']
})
export class InvestimentTypesComponent implements OnInit {

  @Input() investiment: Investimentos[] = [
    {id: tesouro.ID, name: tesouro.NAME, description: tesouro.DESCRIPTION, title: tesouro.TYPE},
    {id: coe.ID, name: coe.NAME, description: coe.DESCRIPTION, title: coe.TYPE, type: coe.TITLE},
    {id: rendaVariavel.ID, name: rendaVariavel.NAME, description: rendaVariavel.DESCRIPTION, title: rendaVariavel.TYPE},
    {id: fundosInvestimento.ID, name: fundosInvestimento.NAME, description: fundosInvestimento.DESCRIPTION, title: fundosInvestimento.TYPE}
  ]

  constructor() { }

  ngOnInit() {
  }

}
