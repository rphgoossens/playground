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

  @Output() private onNewBeer = new EventEmitter<Beer>();

  private beerName: string;
  private selectedBeerType: string;
  private beerBrewery: string;

  private beerTypes: string[];

  private error: string;

  constructor(private apiClientService: ApiClientService) {
    //this.beerTypes = Object.keys(Type)
    this.beerTypes = Object.keys(Type)
  }

  public postNewBeer() {
    let beer: Beer;
    beer = {
      brewery: this.beerBrewery,
      id: null,
      name: this.beerName === '' ? null : this.beerName,
      type: Type[this.selectedBeerType]
    };

    this.apiClientService.addToBeerRepositoryUsingPOST(beer)
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
    this.beerName = null;
    this.selectedBeerType = null;
    this.beerBrewery = null;

    this.error = null;
  }

  ngOnInit() {
  }


}
