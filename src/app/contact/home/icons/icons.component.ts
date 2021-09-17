import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  Theme: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';
  @Input() svg: string = '';

  constructor(private sharedService: SharedService) {
    this.sharedService.sharedTheme.subscribe(theme => this.Theme = theme)
  };
  ngOnInit(): void {}
}
