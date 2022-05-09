import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfg-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.scss']
})
export class CopyrightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSocials(url: string): void {
    window.open(url, '_blank');
  }

}
