import {Component, OnInit} from '@angular/core';
import {ApiClientService} from '../../out/index';
import {Beer, Type} from '../../out/models';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public beers: Beer[];

  constructor(private apiClientService: ApiClientService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public onNewBeer(beer: Beer): void {
    this.beers.push(beer);
  }

  ngOnInit() {
    this.apiClientService.getAllBeersUsingGET(null)
      .subscribe(resp => {
        this.beers = resp.body;
      }, error => {
        console.log(error);
      });

  }

}
