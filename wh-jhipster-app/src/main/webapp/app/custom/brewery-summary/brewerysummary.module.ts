import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {JhipsterSharedModule} from '../../shared';
import {BrewerysummaryComponent} from './brewerysummary.component';
import {BrewerysummaryService} from './brewerysummary.service';
import {brewerySummaryRoute} from './brewerysummary.route';

const ENTITY_STATES = [
    ...brewerySummaryRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BrewerysummaryComponent
    ],
    entryComponents: [
        BrewerysummaryComponent
    ],
    providers: [
        BrewerysummaryService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterBrewerySummaryModule {
}
