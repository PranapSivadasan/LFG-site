import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfg-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.scss']
})
export class CopyrightsComponent implements OnInit {

  wrxSrc: string;

  constructor() {
    this.wrxSrc = 'assets/wrx-white.png';
  }

  ngOnInit(): void {
  }

  mouseEventOnWrxBtn(flag): void {
    this.wrxSrc = flag ? 'assets/wrx-black.png' : 'assets/wrx-white.png';
  }

  openSocials(url: string): void {
    window.open(url, '_blank');
  }

}
