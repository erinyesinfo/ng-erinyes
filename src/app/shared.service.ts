import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  value: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';

  private Theme = new BehaviorSubject(this.value);
  sharedTheme = this.Theme.asObservable();

  constructor() {}

  handleUpdateTheme(Theme: string) {
    this.Theme.next(Theme)
  }
  
}