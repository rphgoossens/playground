import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiClientService} from '../../../out/index';
import {Beer, Type} from '../../../out/models';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css'],
  providers: [ApiClientService]
})
export class NewBeerComponent implements OnInit {

  @Output() onNewBeer = new EventEmitter<Beer>();

  beer: Beer = {} as Beer;
  beerTypes: string[];

  error: string;

  constructor(private apiClientService: ApiClientService) {
    this.beerTypes = Object.keys(Type)
  }

  public postNewBeer() {
    this.apiClientService.addToBeerRepositoryUsingPOST(this.beer)
      .subscribe(resp => {
        this.pushBeer(resp.body);
      }, (resp => {
        console.log(resp);
        this.onError(resp.error.message);
      }));
  }

  private pushBeer(beer: Beer) {
    // add beer to app
    this.onNewBeer.emit(beer);
    this.reset();
  }

  private onError(message: string) {
    this.error = message;
  }

  private reset() {
    this.beer = {} as Beer;
    this.error = null;
  }

  ngOnInit() {
  }


}
