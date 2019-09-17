import { Component, OnInit } from '@angular/core';
//import swal from 'sweetalert';


@Component({
  selector: 'app-home-broker-price',
  templateUrl: './home-broker-price.component.html',
  styleUrls: ['./home-broker-price.component.css']
})
export class HomeBrokerPriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  addPrice() {
    //alert("Escolha o código da ação")
    /*
    swal({
      title: "Are you sure?",
      text: "<input></input>",
      icon: "warning",
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    */
  }
}
