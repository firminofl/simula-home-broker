import { Component, OnInit, Output } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  constructor() { }

  @Output() title:string = 'Filipe'
  
  LineChart = [];
  BarChart = [];
  PieChart = [];

  ngOnInit() {
    // Total de ativos
    this.PieChart = new Chart('totalAtivos', {
      type: 'pie',
      data: {
        labels: ["PETR4", "FLRY3", "ITSA4", "GRDN3", "OIBR3", "XPLG11", "SELIC", "Préfixado", "IPCA"],
        datasets: [{
          label: '# of Votes',
          data: [5.8, 10.9, 45.9, 12.6, 2.7, 10.0, 2, 4, 7 ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 151, 62, 0.2)',
            'rgba(251, 154, 61, 0.2)',
            'rgba(225, 156, 60, 0.2)',
            'rgba(215, 155, 69, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(251, 178, 62, 1)',
            'rgba(225, 152, 64, 1)',
            'rgba(215, 151, 66, 1)'
          ],
          borderWidth: 1.1
        }]
      },
      options: {
        title: {
          text: "Patrimônio",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Renda Fixa
    this.PieChart = new Chart('ativosRendaFixa', {
      type: 'pie',
      data: {
        labels: ["SELIC", "Fundos", "Préfixado", "IPCA", "CDB", "LCI"],
        datasets: [{
          label: '# de ativos',
          data: [23, 32, 20, 10, 10, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Renda Fixa",
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Renda variável
    this.PieChart = new Chart('ativosRendaVariável', {
      type: 'pie',
      data: {
        labels: ["PETR4", "FLRY3", "ITSA4", "GRDN3", "OIBR3", "XPLG11"],
        datasets: [{
          label: '# de ativos',
          data: [57, 32, 300, 50, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Renda Variável",
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


  }

}
