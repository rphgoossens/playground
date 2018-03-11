import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Brewery } from './brewery.model';
import { BreweryService } from './brewery.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-brewery',
    templateUrl: './brewery.component.html'
})
export class BreweryComponent implements OnInit, OnDestroy {
breweries: Brewery[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private breweryService: BreweryService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.breweryService.query().subscribe(
            (res: HttpResponse<Brewery[]>) => {
                this.breweries = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInBreweries();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Brewery) {
        return item.id;
    }
    registerChangeInBreweries() {
        this.eventSubscriber = this.eventManager.subscribe('breweryListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
