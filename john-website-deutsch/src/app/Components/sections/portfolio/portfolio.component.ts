import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../../../Models/PortfolioItem';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: Array<PortfolioItem> = [
    new PortfolioItem(
      'Ecole Mobile',
      'Diese App habe ich für meine Schule innerhalb von 3 Monaten erstellt.',
      'ecole-mockup.png',
      'https://play.google.com/store/apps/details?id=com.johnlouisjacobs.ecolemobile'
    ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
