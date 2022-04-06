import { Component, OnInit } from '@angular/core';
import { title } from 'process';

interface Movie {
  title: string,
  director: string,
  cast: string,
  releaseDate: string,
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color = 'red'; 
  selectOption:string = 'Volvo';
  num:number = 0;
  hasError = false;
  textSpecial = true;
  messageClass = {
    'text-danger': this.hasError,
    'text-success': !this.hasError,
    'text-special': this.textSpecial
  }

  status = false;

  // ngFor
  movies : Movie[] = [
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
  ]
   

  // ngIf
  showTitle = true;
  // ngIf & else
  titleName = true;
  // ngIf & then & block
  movieName = true;
  buttonName = 'Title';
  buttonTitle = 'Title'
  changeName() {
    this.buttonName = 'Director';
  }
  changeName2(){
    return this.buttonTitle =  'Director';
  }
}
