import { Component, OnInit } from '@angular/core';
import { ActiveHB } from './home-broker.model'
import { HomeBrokerService } from './home-broker.service'
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { HomeBrokerBulletComponent } from './home-broker-bullet/home-broker-bullet.component';

@Component({
  selector: 'app-home-broker',
  templateUrl: './home-broker.component.html',
  styleUrls: ['./home-broker.component.css']
})
export class HomeBrokerComponent implements OnInit {

  apiRoot: string = `http://localhost:3001`;
  symbol: string
  actives: any
  active: any
  headers: Headers;
  options: RequestOptions;
  // actives: ActiveHB[] = [
  //   {
  //     ativo: "LEVE3",
  //     ultimo_negocio: "24.8000",
  //     preco_minimo: "24.4700",
  //     preco_abertura: "24.8000",
  //     preco_maximo: "24.8500",
  //     volume: "181600"
  //   },
  //   {
  //     ativo: "PETR4",
  //     ultimo_negocio: "2.8011",
  //     preco_minimo: "4.471",
  //     preco_abertura: "4.8220",
  //     preco_maximo: "4.8550",
  //     volume: "444600"
  //   }
  // ]

  constructor(private httpClient: HttpClient) {
  }

  async ngOnInit() {
    this.actives = await this.getActivesBackend()
  }

  addMenuItem(symbol: string) {
    console.log(`No pai: ${symbol}`)
    this.setActiveBackend(symbol)
  }

  public async getActivesBackend() {
    const data = await this.httpClient.get(`${this.apiRoot}/buscar-ativos`).toPromise();
    return data
  }

  public async setActiveBackend(symbol: string) {
    let body = {symbol};
    await this.httpClient
      .post(`${this.apiRoot}/buscar-cotacoes`, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      })
      .toPromise()
      .then(result => {
        console.log(result)
        this.ngOnInit()
      })
      .catch(error => {
        console.log(`Erro ao inserir o ativo na base de dados!`)
      });
  }
}
