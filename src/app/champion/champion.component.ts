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

/** items is used to store the data from the api call. data.entries is an array of objects. Each Object represents a player in challenger(the best league). 
 * These players then get sorted by their leaguepoints. The more leaguepoints a player has, the higher rank he is. 
 * After that the array gets reversed, because the sort algorithm puts the worst player at the start of the array. 
 * In the HTML document the first 20 playernames/leaguepoints get "sliced" of the array and displayed. */
  constructor(private http: HttpClient) { this.http.get<Post>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=').toPromise().then
  (data => {for (var i=0; i < 300; i++){
    this.items.push(data.entries[i])};this.items.sort(this.compare);
    this.items.reverse();
  }); 

  
  console.log(this.items);



  
 }

  ngOnInit(): void {
  }
  /** compares the leaguepoints of 2 objects. Used to return values with which the .sort() method can sort the array of objects. */
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
