import {UserRouteAccessService} from '../../shared';
import {Routes} from '@angular/router/src/config';
import {BrewerysummaryComponent} from './brewerysummary.component';

export const brewerySummaryRoute: Routes = [
    {
        path: 'brewerysummary',
        component: BrewerysummaryComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.brewerysummary.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];
