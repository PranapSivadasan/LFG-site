import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfg-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  openSocials(url: string): void {
    window.open(url, '_blank');
  }

}
