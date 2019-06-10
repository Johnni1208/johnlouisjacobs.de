import { Component, OnInit } from '@angular/core';
import { TransitionService } from '../../../Services/transition.service';
import { TransitionStates } from '../../../Models/TransitionStates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageLoaded = false;
  imageLoaded = false;

  constructor(private transitionService: TransitionService) {
  }

  ngOnInit() {
    this.transitionService.getTransitionObservable().subscribe(toState => {
      if (toState === TransitionStates.HOMEPAGE) {
        this.pageLoaded = true;
      }
    });
  }

  hasLoaded(): boolean {
    return this.pageLoaded && this.imageLoaded;
  }

}
