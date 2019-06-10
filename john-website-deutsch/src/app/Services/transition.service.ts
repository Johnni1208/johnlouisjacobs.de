import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  private transitionEventSubject: Subject<string> = new Subject<string>();

  constructor() {}

  transitioned(toState: string): void {
    this.transitionEventSubject.next(toState);
  }

  getTransitionObservable(): Observable<string> {
    return this.transitionEventSubject.asObservable();
  }

}
