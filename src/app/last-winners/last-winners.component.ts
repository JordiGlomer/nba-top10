import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-winners',
  templateUrl: './last-winners.component.html',
  styleUrls: ['./last-winners.component.scss']
})
export class LastWinnersComponent implements OnInit {

  campeonatos: Campeonato = [
    { id: 1, year: "2015-16", champion: "Los Angeles Lakers", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png", championUrl: "https://en.wikipedia.org/wiki/Los_Angeles_Lakers", bestPlayers: ['Kobe Bryant', 'Steve Nash', 'Robert Sacre', 'Manu Chao', 'Peter Griffin'] },
    { id: 2, year: "2014-15", champion: "Boston Celtics", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/200px-Boston_Celtics.svg.png", championUrl: "https://en.wikipedia.org/wiki/Boston_Celtics", bestPlayers: ['Isaiah Thomas', 'Marcus Smart', 'Jared Sullinger', 'Dr. Strange', 'Sr. Wilson'] },
    { id: 3, year: "2013-14", champion: "Miami Heat", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/200px-Miami_Heat_logo.svg.png", championUrl: "https://en.wikipedia.org/wiki/Miami_Heat", bestPlayers: ['Lebron James', 'Dwyane Wade', 'Chris Bosh', 'David the Gnom', 'Santa Claus'] }
  ];


  constructor() {

  }

  ngOnInit(): void {
  }

}
type Campeonato = Array<{ id: number; year: string; champion: string; imageUrl: string; championUrl: string; bestPlayers: any }>;
