import { Component, OnInit, Input } from '@angular/core';
import { ActiveHB } from '../home-broker.model';
import { HomeBrokerService } from '../home-broker.service';

@Component({
  selector: 'app-home-broker-bullet',
  templateUrl: './home-broker-bullet.component.html',
  styleUrls: ['./home-broker-bullet.component.css']
})
export class HomeBrokerBulletComponent implements OnInit {

  @Input() active: ActiveHB

  constructor(private homeBrokerService: HomeBrokerService){}
  
  ngOnInit() {
    console.log(`FilhoBullet com os dados: ${JSON.stringify(this.active)}`)
    HomeBrokerService.emitirAtivo.subscribe(
      active => {
        this.active = active
      }
    )
  }

}
