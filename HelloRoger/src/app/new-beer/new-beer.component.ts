import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiClientService} from '../../../out/index';
import {Beer, Type} from '../../../out/models';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css'],
})
export class NewBeerComponent implements OnInit {

  @Output() onNewBeer = new EventEmitter<Beer>();

  public beer: Beer = {} as Beer;
  public beerTypes: string[];

  public error: string;

  constructor(private apiClientService: ApiClientService) {
    this.beerTypes = Object.keys(Type)
  }

  /**
   * Call REST service to POST a new beer
   */
  public postNewBeer(): void {
    this.apiClientService.addToBeerRepositoryUsingPOST(this.beer)
      .subscribe(resp => {
        this.pushBeer(resp.body);
      }, (error => {
        console.log(error);
        this.onError(error.error.message);
      }));
  }

  private pushBeer(beer: Beer): void {
    // add beer to app
    this.onNewBeer.emit(beer);
    this.reset();
  }

  private onError(message: string): void {
    this.error = message;
  }

  private reset(): void {
    this.beer = {} as Beer;
    this.error = null;
  }

  ngOnInit() {
  }


}
