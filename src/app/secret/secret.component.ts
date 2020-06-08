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
/** items is used to store the data from the api call. data.services is an array of objects. Through the api 4 services are given. 
 * These 4 services are then stored in items. services.status either has a value of "online" or "offline".
*/
 

  constructor(private http: HttpClient) {
    this.http.get<Post>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=').toPromise().then
    (data => {for (var i=0; i < 4; i++){
          this.items.push(data.services[i])};
        }); console.log(this.items);
      
    ;
   
   }

  ngOnInit(): void {
  }

}
