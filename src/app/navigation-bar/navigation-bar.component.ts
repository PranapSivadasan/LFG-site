import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfg-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSocials(url: string): void {
    window.open(url, '_blank');
  }

}
