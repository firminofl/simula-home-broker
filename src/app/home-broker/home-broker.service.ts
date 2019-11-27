import { ActiveHB } from "../home-broker/home-broker.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
//import { ErrorHandler } from "../../app/app.error-handler";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable()
export class HomeBrokerService {

  apiRoot: string = `http://localhost:3001/buscar-ativos`;
  results: Object[];
  loading: boolean;

  static emitirAtivo = new EventEmitter<ActiveHB>()
  
  constructor(private httpClient: HttpClient) { }

  comprarAtivo(active: ActiveHB){
    HomeBrokerService.emitirAtivo.emit(active)
  }
  
  public async actives() {
    const data = await this.httpClient.get(this.apiRoot).toPromise();
    console.log("Data: " + JSON.stringify(data));
    //return data
    // const promise = this.httpClient.get(this.apiRoot).toPromise();
    // console.log(promise);
    // promise.then((data) => {
    //   console.log("Promise resolved with: " + JSON.stringify(data));
      
    // }).catch((error) => {
    //   console.log("Promise rejected with " + JSON.stringify(error));
      
    // });
  }
}