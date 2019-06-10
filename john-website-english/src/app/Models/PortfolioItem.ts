import { PortfolioImageFactory } from './PortfolioImageFactory';

export class PortfolioItem {
  public img;

  constructor(
    public title: string,
    public content: string,
    imageFileName: string,
    public link: string = ''
  ) {
    this.img = PortfolioImageFactory.getImagePath(imageFileName);
  }
}
