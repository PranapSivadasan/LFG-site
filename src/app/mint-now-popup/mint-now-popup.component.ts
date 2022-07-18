import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfg-mint-now-popup',
  templateUrl: './mint-now-popup.component.html',
  styleUrls: ['./mint-now-popup.component.scss']
})
export class MintNowPopupComponent implements OnInit {

  show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit(): void {
    setTimeout(() => this.show = true, 2000);
  }

  openMintPage(): void {
    window.open('https://nft.wazirx.org/collection/BEING-ME?tab=MINT', '_blank');
  }

}
