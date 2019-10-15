import { Component, OnInit} from '@angular/core';
import { CryptoService } from '../crypto.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allData = [];
  public key: string;
  public displaycheckbox: boolean = false;
  public reverse: boolean = false;
  // public range=[];
  // private rangeData = [];

 
  constructor(public cryptoService: CryptoService) {
    
  }

  ngOnInit() {

    this.cryptoService.getTable().subscribe(
      apiResponse => {
        this.allData = apiResponse['data'];
        console.log(this.allData)

      }

    );
   
  }
  // sorting function
  public sort(key) {
    this.key = key;
   console.log(this.key);
    this.reverse = !this.reverse;
    console.log(this.reverse)

  }
  
  p: number = 1;

// Range slider function
//   public myOnFinish(event1, type) {
 

//     let min = event1.from;
//     let max = event1.to;

//     if (type === 'marketCap') {
//       if (this.range.length > 0) {
//         this.range = this.range.filter(word => (word.quotes.USD.market_cap > min && word.quotes.USD.market_cap < max));
//       } else {
//         this.range = this.rangeData.filter(word => (word.quotes.USD.market_cap > min && word.quotes.USD.market_cap < max));
//       }
//     } else {
//       if (this.range.length > 0) {
//         this.range = this.range.filter(word => (word.quotes.USD.price > min && word.quotes.USD.price < max));
//       } else {
//         this.range = this.rangeData.filter(word => (word.quotes.USD.price > min && word.quotes.USD.price < max));
//       }
//     }

//     this.allData = this.range;

// console.log(this.range)
//   }
  
}
 