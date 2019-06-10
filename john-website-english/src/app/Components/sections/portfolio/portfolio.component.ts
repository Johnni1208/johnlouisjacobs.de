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
      'I\'ve build this app for my school within 3 months.',
      'ecole-mockup.png',
      'https://play.google.com/store/apps/details?id=com.johnlouisjacobs.ecolemobile'
    ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
