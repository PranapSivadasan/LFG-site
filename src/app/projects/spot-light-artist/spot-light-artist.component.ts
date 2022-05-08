import { Component, OnInit } from '@angular/core';
import slaJSON from '../../../assets/data/sla.json';

@Component({
  selector: 'lfg-spot-light-artist',
  templateUrl: './spot-light-artist.component.html',
  styleUrls: ['./spot-light-artist.component.scss']
})
export class SpotLightArtistComponent implements OnInit {

  constructor() { }

  slaData = slaJSON;

  arr = [1,2,3];

  ngOnInit(): void {
  }

  openCollection(link): void {
    window.open(link, '_blank');
  }

}
