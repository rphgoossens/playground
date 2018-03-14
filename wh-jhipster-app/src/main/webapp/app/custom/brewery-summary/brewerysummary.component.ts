import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brewerysummary} from './brewerysummary.model';
import {Principal} from '../../shared';
import {JhiAlertService, JhiEventManager} from 'ng-jhipster';
import {BrewerysummaryService} from './brewerysummary.service';
import {Subscription} from 'rxjs/Subscription';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
    selector: 'jhi-brewerysummary',
    templateUrl: './brewerysummary.component.html',
    styles: []
})
export class BrewerysummaryComponent implements OnInit, OnDestroy {
    brewerySummaries: Brewerysummary[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(private brewerysummaryService: BrewerysummaryService,
                private jhiAlertService: JhiAlertService,
                private eventManager: JhiEventManager,
                private principal: Principal) {
    }

    loadAll() {
        this.brewerysummaryService.query().subscribe(
            (res: HttpResponse<Brewerysummary[]>) => {
                this.brewerySummaries = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInBrewerySummaries();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInBrewerySummaries() {
        this.eventSubscriber = this.eventManager.subscribe('brewerysummaryListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }

}
