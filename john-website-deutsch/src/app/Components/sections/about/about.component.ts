import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import * as moment from 'moment';
import { routerTransition } from '../../../animations';
import { TransitionService } from '../../../Services/transition.service';
import { TransitionStates } from '../../../Models/TransitionStates';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // age: string = moment('20021208', 'YYYYMMDD').fromNow();
  age: number = moment().diff('2002-08-12', 'years');
  yearsProgramming: number = this.age - 12;

  pageLoaded = false;
  imageLoaded = false;

  constructor(private transitionService: TransitionService) {
  }

  ngOnInit() {
    this.transitionService.getTransitionObservable().subscribe(toState => {
      if (toState === TransitionStates.ABOUTPAGE) {
        this.pageLoaded = true;
      }
    });
  }

  hasLoaded(): boolean {
    return this.pageLoaded && this.imageLoaded;
  }
}
