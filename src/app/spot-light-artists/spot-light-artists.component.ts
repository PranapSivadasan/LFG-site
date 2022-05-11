import { Component, OnInit } from '@angular/core';
import slaJSON from '../../assets/data/sla.json';

@Component({
  selector: 'lfg-spot-light-artists',
  templateUrl: './spot-light-artists.component.html',
  styleUrls: ['./spot-light-artists.component.scss']
})
export class SpotLightArtistsComponent implements OnInit {

  slaData = slaJSON;

  constructor() { }

  ngOnInit(): void {
  }

  openCollection(link): void {
    window.open(link, '_blank');
  }


}
