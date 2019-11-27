import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { ActiveHB } from '../home-broker.model';
import { HomeBrokerService } from '../home-broker.service';

@Component({
  selector: 'app-home-broker-price',
  templateUrl: './home-broker-price.component.html',
  styleUrls: ['./home-broker-price.component.css']
})
export class HomeBrokerPriceComponent implements OnInit {

  @Output() add = new EventEmitter
  // @Output() comprarAtivo = new EventEmitter
  // @Output() venderAtivo = new EventEmitter

  @ViewChild('addActiveInput') addActiveInput: ElementRef;
  @Input() actives: ActiveHB

  constructor(private homeBrokerService: HomeBrokerService) { }

  ngOnInit() {
    console.log(`Filho com os dados: ${JSON.stringify(this.actives)}`)
  }

  emitAddEvent(){
    console.log(`No filho: ${this.addActiveInput.nativeElement.value}`)
    this.add.emit(this.addActiveInput.nativeElement.value)
  }

  comprarAcao(active: ActiveHB){
    console.log(`Comprar: ${JSON.stringify(active)}`)
    active.operacao = 'Comprar'
    this.homeBrokerService.comprarAtivo(active)
  }

  venderAcao(active: ActiveHB){
    console.log(`Vender: ${JSON.stringify(active)}`)
    active.operacao = 'Vender'
    this.homeBrokerService.comprarAtivo(active)
  }
}
