import { Component, OnInit } from '@angular/core';
import teamJson from '../../assets/data/team.json';

@Component({
  selector: 'lfg-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamData = teamJson;

  constructor() { }

  ngOnInit(): void {
  }
  
  openSocials(url: string): void {
    window.open(url, '_blank');
  }
}
