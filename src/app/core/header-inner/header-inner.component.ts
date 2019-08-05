import { Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent implements OnInit{

  person:string = 'Investidor'

  constructor(){}

  ngOnInit(){

  }
}
