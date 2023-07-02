import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import { debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  cards:Card[] = [];
  offset = 0;

  cardTextFC = new FormControl('');
  
  constructor (private cardService: CardService){}

  onScroll() {
    console.log("scrolled!!");
    this.offset += 100;
    this.searchCards();
  }

  ngOnInit():void{
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000) //un segundo después, gracias a rxjs
    )
    .subscribe(res =>{
      console.log(res);
      this.cards = []; //limpiamos las cartas
      this.searchCards(res);
    })
    this.searchCards();
  }

  searchCards(cardName:string|null = null){
    this.cardService.getCards(cardName, this.offset).subscribe(res => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    })
  }
}
