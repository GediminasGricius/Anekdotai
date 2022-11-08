import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../models/Joke';


@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private _categories:string[]=['Programming','Miscellaneous','Dark','Pun','Spooky','Christmas'];

  constructor(private http:HttpClient) { }

  public getJoke(category:string){
    return this.http.get<Joke>("https://v2.jokeapi.dev/joke/"+category,{
      params:{
        type:'single'
      }
    });
  }
  public get categories(){
    return this._categories;
  }
}
