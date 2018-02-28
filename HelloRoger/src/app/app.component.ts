import {Component, OnInit} from '@angular/core';
import {ApiClientService} from '../../out/index';
import {Beer, Type} from '../../out/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiClientService]
})
export class AppComponent implements OnInit {
  beers: Beer[];// = [{name: 'Brand', id: 1, brewery: 'IPA', type: Type.INDIA_PALE_ALE}];

  constructor(private apiClientService: ApiClientService) {
  }

  ngOnInit() {
    //this.beers = [{name: 'Brand', id: 1, brewery: 'IPA', type: Type.INDIA_PALE_ALE}];
    this.apiClientService.getAllBeersUsingGET(null)
      .subscribe(resp => {
        //console.log(resp.body)
        //this.beers = {...resp.body};
        this.beers = resp.body;
      });

  }

  onNewBeer(beer: Beer) {
    this.beers.push(beer);
  }

}
