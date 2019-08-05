import { Component, AfterViewInit, Input } from '@angular/core';

import * as Prism from 'prismjs';

import { Investimentos } from './home.model'
import { tesouro, coe, rendaVariavel, fundosInvestimento } from '../texts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @Input() investiment: Investimentos[] = [
    {name: tesouro.NAME, description: tesouro.DESCRIPTION, title: tesouro.TYPE},
    {name: coe.NAME, description: coe.DESCRIPTION, title: coe.TYPE, type: coe.TITLE},
    {name: rendaVariavel.NAME, description: rendaVariavel.DESCRIPTION, title: rendaVariavel.TYPE},
    {name: fundosInvestimento.NAME, description: fundosInvestimento.DESCRIPTION, title: fundosInvestimento.TYPE}
  ]
  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
