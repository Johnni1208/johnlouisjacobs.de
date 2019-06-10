import { Component } from '@angular/core';
import { routerTransition } from './animations';
import { RouterOutlet } from '@angular/router';
import { AnimationEvent } from '@angular/animations';
import { TransitionService } from './Services/transition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  constructor(private transitionService: TransitionService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onAnimationEvent(event: AnimationEvent) {
    if (event.toState != null) {
      this.transitionService.transitioned(event.toState);
    }
  }
}
