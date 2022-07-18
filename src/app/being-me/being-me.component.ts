import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lfg-being-me',
  templateUrl: './being-me.component.html',
  styleUrls: ['./being-me.component.scss']
})

export class BeingMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMintPage(): void {
    window.open('https://nft.wazirx.org/collection/BEING-ME?tab=MINT', '_blank');
  }
}
