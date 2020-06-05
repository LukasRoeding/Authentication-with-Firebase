import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  providers = AuthProvider;

  items=[];

  constructor(private http: HttpClient) {
    this.http.get<Post>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-aa22acf8-9d16-4837-852b-0b9928773842').toPromise().then
    (data => {for (var i=0; i < 4; i++){
          this.items.push(data.services[i])};
        }); console.log(this.items);
      
    ;
   
   }

  ngOnInit(): void {
  }

}
