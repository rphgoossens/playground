import {Component, OnInit} from '@angular/core';
import {ApiClientService} from '../../out/index';
import {Beer, Type} from '../../out/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public beers: Beer[];

  constructor(private apiClientService: ApiClientService) {
  }

  public onNewBeer(beer: Beer): void {
    this.beers.push(beer);
  }

  ngOnInit() {
    //this.beers = [{name: 'Brand', id: 1, brewery: 'IPA', type: Type.INDIA_PALE_ALE}];
    this.apiClientService.getAllBeersUsingGET(null)
      .subscribe(resp => {
        this.beers = resp.body;
      }, error => {
        console.log(error);
      });

  }

}
