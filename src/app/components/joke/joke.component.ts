import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from 'src/app/models/Joke';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
 
  public joke:Joke|null=null;
  public categories:string[]=[];
  public category:string="Programming";

  public loading:boolean=false;
  public error:boolean=false;


  constructor(private jokeService:JokeService) { 
    this.categories=this.jokeService.categories;
    this.loadJoke();
  }

  private loadJoke(){
    this.loading=true;
    this.jokeService.getJoke(this.category).subscribe(
      {
        next:(response)=>{
          this.joke=response;
          this.loading=false;
          this.error=false;
       },
       error:(error)=>{
        this.loading=false;
        this.error=true;

       }
      }
      );
  }

  ngOnInit(): void {
  }

  public onClickRefresh(){
    this.loadJoke();
  }

}
