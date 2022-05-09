import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lfg-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  // @ViewChild('navigationbar') navbar: HTMLElement;
  scrolled: boolean;

  constructor() {
    this.scrolled = false;
  }


  @HostListener('window:scroll', [])
  scrollListener(): void {
    window.scrollY > 30 ? this.scrolled = true : this.scrolled = false;
  }


  ngOnInit(): void {
  }

  openSocials(url: string): void {
    window.open(url, '_blank');
  }

}
