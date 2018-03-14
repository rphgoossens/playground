import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {JhipsterBrewerySummaryModule} from './brewery-summary/brewerysummary.module';

@NgModule({
    imports: [
        JhipsterBrewerySummaryModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterCustomModule {
}
