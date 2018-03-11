import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    BeerService,
    BeerPopupService,
    BeerComponent,
    BeerDetailComponent,
    BeerDialogComponent,
    BeerPopupComponent,
    BeerDeletePopupComponent,
    BeerDeleteDialogComponent,
    beerRoute,
    beerPopupRoute,
    BeerResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...beerRoute,
    ...beerPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BeerComponent,
        BeerDetailComponent,
        BeerDialogComponent,
        BeerDeleteDialogComponent,
        BeerPopupComponent,
        BeerDeletePopupComponent,
    ],
    entryComponents: [
        BeerComponent,
        BeerDialogComponent,
        BeerPopupComponent,
        BeerDeleteDialogComponent,
        BeerDeletePopupComponent,
    ],
    providers: [
        BeerService,
        BeerPopupService,
        BeerResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterBeerModule {}
