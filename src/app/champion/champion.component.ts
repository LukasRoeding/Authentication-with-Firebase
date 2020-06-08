import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../champion/post';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {
items=[];
sortedItems:[];
  constructor(private http: HttpClient) { this.http.get<Post>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=').toPromise().then
  (data => {for (var i=0; i < 300; i++){
    this.items.push(data.entries[i])};this.items.sort(this.compare);
    this.items.reverse();
  }); 
  console.log(this.items);



  
 }

  ngOnInit(): void {
  }
  compare(a,b){
    if ( a.leaguePoints < b.leaguePoints ){
      return -1;
    }
    if ( a.leaguePoints > b.leaguePoints ){
      return 1;
    }
    return 0;
  }
  
}
